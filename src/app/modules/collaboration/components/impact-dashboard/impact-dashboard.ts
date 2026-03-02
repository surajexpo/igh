import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface DashboardMetric {
    label: string;
    value: number;
    suffix: string;
    prefix: string;
    description: string;
    colorClass: string;
    delay: number;
}

@Component({
    selector: 'app-impact-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative border-y border-white/5">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#1B3A4B]/20 via-[#0B0F19] to-[#0B0F19]"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
            Collaboration <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-white">Impact</span>
          </h2>
          <p class="text-white/50 text-lg">Measurable outcomes of borderless academic and industrial synergy.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div *ngFor="let metric of metrics" class="glass p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors">
            
            <div [ngClass]="['text-5xl lg:text-6xl font-black mb-2 flex items-baseline justify-center tracking-tighter drop-shadow-lg transition-transform duration-500 group-hover:scale-110', metric.colorClass]">
              <span class="text-3xl font-bold opacity-70">{{ metric.prefix }}</span>
              <span #counterElement [attr.data-target]="metric.value">0</span>
              <span class="text-3xl font-bold opacity-70">{{ metric.suffix }}</span>
            </div>
            
            <h4 class="text-white font-bold tracking-widest uppercase text-sm mb-2">{{ metric.label }}</h4>
            <p class="text-xs text-white/40 leading-relaxed">{{ metric.description }}</p>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ImpactDashboardComponent implements AfterViewInit {
    @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;
    isBrowser: boolean;

    metrics: DashboardMetric[] = [
        {
            label: 'Partner Orgs',
            value: 180,
            suffix: '+',
            prefix: '',
            description: 'Universities, agencies, and corporations united globally.',
            colorClass: 'text-[#00B4D8]',
            delay: 0
        },
        {
            label: 'Joint Publications',
            value: 1250,
            suffix: '+',
            prefix: '',
            description: 'Peer-reviewed papers resulting from cross-border research.',
            colorClass: 'text-white',
            delay: 200
        },
        {
            label: 'R&D Funding',
            value: 4.2,
            suffix: 'B',
            prefix: '$',
            description: 'Capital mobilized for collaborative space-tech initiatives.',
            colorClass: 'text-[#F4A261]',
            delay: 400
        },
        {
            label: 'Fellows Hosted',
            value: 3500,
            suffix: '',
            prefix: '',
            description: 'Scholars participating in institutional exchange programs.',
            colorClass: 'text-[#00B4D8]',
            delay: 600
        }
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngAfterViewInit() {
        if (this.isBrowser && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const endValue = parseFloat(target.getAttribute('data-target') || '0');
                        this.animateCounter(target, endValue);
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.5 });

            this.counterElements.forEach(el => observer.observe(el.nativeElement));
        }
    }

    private animateCounter(element: HTMLElement, endValue: number) {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;

        const counter = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            // easeOutExpo
            const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = endValue * easing;

            // Format logic: if endValue is a float (like 4.2), keep 1 decimal, else round
            if (endValue % 1 !== 0) {
                element.innerText = currentValue.toFixed(1);
            } else {
                element.innerText = Math.round(currentValue).toString();
            }

            if (currentFrame === totalFrames) {
                clearInterval(counter);
                if (endValue % 1 !== 0) {
                    element.innerText = endValue.toFixed(1);
                } else {
                    element.innerText = endValue.toString();
                }
            }
        }, frameRate);
    }
}
