import { Component, OnInit, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-particle-bg',
    standalone: true,
    imports: [CommonModule],
    template: `<canvas #particleCanvas class="absolute inset-0 z-0"></canvas>`,
    styles: [`
    :host { display: block; position: absolute; inset: 0; pointer-events: none; }
  `]
})
export class ParticleBgComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
    private ctx!: CanvasRenderingContext2D;
    private particles: Particle[] = [];
    private animationId!: number;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    ngOnInit() { }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                this.initCanvas();
                this.createParticles();
                this.animate();
                window.addEventListener('resize', () => this.initCanvas());
            }, 0);
        }
    }

    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId) && this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    private initCanvas() {
        const canvas = this.canvasRef.nativeElement;
        this.ctx = canvas.getContext('2d')!;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    private createParticles() {
        const count = 100;
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(this.ctx));
        }
    }

    private animate() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.particles.forEach(p => {
            p.update();
            p.draw();
        });
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth) this.x = 0;
        else if (this.x < 0) this.x = window.innerWidth;

        if (this.y > window.innerHeight) this.y = 0;
        else if (this.y < 0) this.y = window.innerHeight;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
}
