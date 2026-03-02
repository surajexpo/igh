import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
    selector: 'app-threejs-hero',
    standalone: true,
    template: `
    <div #rendererContainer class="absolute inset-0 z-0"></div>
  `,
    styles: [`
    :host {
      display: block;
      position: absolute;
      inset: 0;
      z-index: 0;
      overflow: hidden;
      background-color: #000;
    }
    
    div {
      width: 100%;
      height: 100%;
    }
  `]
})
export class ThreejsHeroComponent implements AfterViewInit, OnDestroy {
    @ViewChild('rendererContainer', { static: true }) rendererContainer!: ElementRef<HTMLDivElement>;

    private renderer!: THREE.WebGLRenderer;
    private scene!: THREE.Scene;
    private camera!: THREE.PerspectiveCamera;

    // Scene Objects
    private earthGroup!: THREE.Group;
    private networkLines!: THREE.LineSegments;
    private stars!: THREE.Points;

    private animationFrameId: number | null = null;
    private isBrowser: boolean;

    constructor(
        private ngZone: NgZone,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit(): void {
        if (this.isBrowser) {
            // Run Three.js initialization outside of Angular's zone to prevent 
            // excessive change detection cycles on every animation frame.
            this.ngZone.runOutsideAngular(() => {
                this.initThreeJs();
                this.animate();
                this.addEventListeners();
            });
        }
    }

    ngOnDestroy(): void {
        if (this.isBrowser) {
            this.removeEventListeners();
            this.cleanup();
        }
    }

    private initThreeJs(): void {
        const container = this.rendererContainer.nativeElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        // 1. Scene Setup
        this.scene = new THREE.Scene();

        // Slight blue/purple fog for depth
        this.scene.fog = new THREE.FogExp2(0x050510, 0.0015);

        // 2. Camera Setup
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
        this.camera.position.set(0, 0, 400);

        // 3. Renderer Setup
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true // Allow CSS backgrounds to show through if needed
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance

        // Add canvas to DOM
        container.appendChild(this.renderer.domElement);

        // 4. Lighting Setup
        const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5); // Dark blue ambient
        this.scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0x00d4ff, 2); // Neon blue main light
        mainLight.position.set(100, 50, 200);
        this.scene.add(mainLight);

        const purpleLight = new THREE.DirectionalLight(0xb624ff, 1.5); // Cosmic purple back/fill light
        purpleLight.position.set(-100, -50, -50);
        this.scene.add(purpleLight);

        // 5. Build Scene Objects
        this.createStarfield();
        this.createEarthAndNetwork();
    }

    private createStarfield(): void {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 3000;
        const posArray = new Float32Array(starCount * 3);
        const colorArray = new Float32Array(starCount * 3);

        const baseColor = new THREE.Color(0xffffff);
        const blueColor = new THREE.Color(0x00d4ff);
        const purpleColor = new THREE.Color(0xb624ff);

        for (let i = 0; i < starCount * 3; i += 3) {
            // Create sphere volume for stars
            const distance = 300 + Math.random() * 1000;
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            posArray[i] = distance * Math.sin(theta) * Math.cos(phi);
            posArray[i + 1] = distance * Math.sin(theta) * Math.sin(phi);
            posArray[i + 2] = distance * Math.cos(theta);

            // Randomize color slightly
            const rand = Math.random();
            let color = baseColor;
            if (rand > 0.8) color = blueColor;
            else if (rand > 0.95) color = purpleColor;

            // Dimmer base stars
            const intensity = 0.2 + Math.random() * 0.8;

            colorArray[i] = color.r * intensity;
            colorArray[i + 1] = color.g * intensity;
            colorArray[i + 2] = color.b * intensity;
        }

        starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

        // Programmatically create a simple circle texture in memory to round the stars
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        if (context) {
            context.beginPath();
            context.arc(32, 32, 30, 0, Math.PI * 2);
            context.fillStyle = 'white';
            context.fill();
        }
        const circleTexture = new THREE.CanvasTexture(canvas);

        const starMaterial = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            map: circleTexture,
            alphaTest: 0.5,
            sizeAttenuation: true
        });

        this.stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(this.stars);
    }

    private createEarthAndNetwork(): void {
        this.earthGroup = new THREE.Group();
        // Position earth down and back to serve as a backdrop
        this.earthGroup.position.set(0, -100, -100);

        // --- Earth Base Sphere ---
        const earthRadius = 150;
        const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);

        // We use a dark, reflective material for the base
        const earthMaterial = new THREE.MeshPhongMaterial({
            color: 0x050b14,
            emissive: 0x020510,
            specular: 0x00d4ff,
            shininess: 50,
            transparent: true,
            opacity: 0.9
        });

        const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

        // --- Atmosphere Glow (Slightly larger sphere) ---
        const atmosphereGeometry = new THREE.SphereGeometry(earthRadius * 1.05, 64, 64);
        const atmosphereMaterial = new THREE.MeshLambertMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide // Render on the inside to create an outline glow
        });
        const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);

        // --- Network Lines (Icosahedron wireframe strategy) ---
        // Create an icosahedron geometry slightly larger than the earth
        const networkRadius = earthRadius * 1.02;
        const icosahedron = new THREE.IcosahedronGeometry(networkRadius, 3);

        // We use edges geometry to extract the connecting lines
        const edgesGeometry = new THREE.EdgesGeometry(icosahedron);

        const networkMaterial = new THREE.LineBasicMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.3,
            blending: THREE.AdditiveBlending
        });

        this.networkLines = new THREE.LineSegments(edgesGeometry, networkMaterial);

        // Assembly
        this.earthGroup.add(earthMesh);
        this.earthGroup.add(atmosphereMesh);
        this.earthGroup.add(this.networkLines);

        // Tilt the Earth slightly
        this.earthGroup.rotation.z = 23.5 * Math.PI / 180;

        this.scene.add(this.earthGroup);
    }

    private animate = (): void => {
        // Request next frame
        this.animationFrameId = requestAnimationFrame(this.animate);

        // Rotate Earth and Network
        if (this.earthGroup) {
            this.earthGroup.rotation.y += 0.0005; // Slow rotation
        }

        // Very slow rotation for starfield to simulate camera panning
        if (this.stars) {
            this.stars.rotation.y += 0.0002;
            this.stars.rotation.x += 0.0001;
        }

        // Pulse the network lines slightly
        if (this.networkLines && this.networkLines.material) {
            const material = this.networkLines.material as THREE.LineBasicMaterial;
            const time = Date.now() * 0.001;
            // Pulse opacity between 0.1 and 0.4
            material.opacity = 0.1 + (Math.sin(time * 2) + 1) * 0.15;
        }

        // Render Scene
        this.renderer.render(this.scene, this.camera);
    };

    private addEventListeners(): void {
        window.addEventListener('resize', this.onWindowResize, false);
    }

    private removeEventListeners(): void {
        window.removeEventListener('resize', this.onWindowResize, false);
    }

    private onWindowResize = (): void => {
        if (!this.rendererContainer || !this.camera || !this.renderer) return;

        const container = this.rendererContainer.nativeElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    };

    private cleanup(): void {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
        }

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.forceContextLoss();
            this.renderer.domElement.parentElement?.removeChild(this.renderer.domElement);
        }

        // Dispose Geometries and Materials
        if (this.scene) {
            this.scene.traverse((object) => {
                if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments || object instanceof THREE.Points) {
                    if (object.geometry) {
                        object.geometry.dispose();
                    }
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach(mat => mat.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });
        }
    }
}
