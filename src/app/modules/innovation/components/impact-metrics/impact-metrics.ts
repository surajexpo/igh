import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metric {
    label: string;
    value: number;
    suffix: string;
    currentValue: number;
}

@Component({
    selector: 'app-impact-metrics',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-midnight-blue relative overflow-hidden" #metricsSection>
      <div class="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10 mix-blend-screen"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Global <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-blue">Impact Metrics</span>
          </h2>
          <p class="text-lg text-white/60 font-light">
            Quantifying our commitment to scaling educational breakthroughs into solutions that benefit all of humanity.
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          
          <div *ngFor="let metric of metrics" class="relative group">
            <div class="absolute inset-0 bg-gradient-to-t from-electric-cyan/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
            <div class="glass relative p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[200px] hover:border-electric-cyan/30 transition-colors bg-space-black/50 backdrop-blur-xl">
              
              <div class="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {{ metric.currentValue }}{{ metric.suffix }}
              </div>
              
              <div class="text-sm md:text-base font-semibold text-white/70 uppercase tracking-widest leading-snug">
                {{ metric.label }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ImpactMetricsComponent implements OnInit, AfterViewInit {
    @ViewChild('metricsSection') metricsSection!: ElementRef;

    metrics: Metric[] = [
        { label: 'Technologies Developed', value: 142, suffix: '+', currentValue: 0 },
        { label: 'Prototypes Engineered', value: 350, suffix: '', currentValue: 0 },
        { label: 'Global Partnerships', value: 85, suffix: '+', currentValue: 0 },
        { label: 'Social Impact Initatives', value: 50, suffix: 'M', currentValue: 0 }
    ];

    private observer: IntersectionObserver | null = null;
    private hasAnimated = false;

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !this.hasAnimated) {
                    this.animateCounters();
                    this.hasAnimated = true;
                    this.observer?.disconnect();
                }
            }, { threshold: 0.3 });

            if (this.metricsSection) {
                this.observer.observe(this.metricsSection.nativeElement);
            }
        } else {
            // Fallback for SSR or if IntersectionObserver is not supported
            this.metrics.forEach(m => m.currentValue = m.value);
        }
    }

    private animateCounters(): void {
        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);

        this.metrics.forEach(metric => {
            let frame = 0;
            const counter = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                // Ease out quad
                const currentProgress = progress * (2 - progress);

                metric.currentValue = Math.floor(currentProgress * metric.value);

                if (frame === totalFrames) {
                    metric.currentValue = metric.value;
                    clearInterval(counter);
                }
            }, frameDuration);
        });
    }
}
