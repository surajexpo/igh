import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-impact-metrics',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
        <!-- Glow background -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-neon-blue/10 via-cosmic-purple/10 to-transparent blur-3xl opacity-50"></div>
        
        <div class="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          @for (metric of metrics; track metric.label) {
            <div class="space-y-4 group">
              <div class="text-4xl md:text-6xl font-black text-white tracking-tighter group-hover:text-gradient transition-all duration-500">
                {{ metric.value }}
              </div>
              <div class="text-sm font-bold tracking-[0.2em] uppercase text-white/40">
                {{ metric.label }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ImpactMetricsComponent {
    metrics = [
        { value: '450+', label: 'Published Papers' },
        { value: '82', label: 'Global Patents' },
        { value: '$1.2B', label: 'Research Grants' },
        { value: '14', label: 'Mars Missions' }
    ];
}
