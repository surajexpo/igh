import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-impact-counters',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          @for (stat of stats; track stat.label) {
            <div class="space-y-4 group">
              <div class="text-5xl md:text-7xl font-black text-white tracking-tighter group-hover:text-gradient transition-all duration-700">
                {{ stat.value }}
              </div>
              <div class="text-[10px] font-black tracking-[0.3em] uppercase text-white/30">
                {{ stat.label }}
              </div>
              <div class="w-full h-[1px] bg-white/5 relative overflow-hidden">
                <div class="absolute inset-0 bg-accent-cyan w-1/3 group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>
          }
        </div>
        <!-- Abstract background glow -->
        <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-deep-violet/20 blur-[120px] rounded-full"></div>
      </div>
    </section>
  `
})
export class ImpactCountersComponent {
    stats = [
        { value: '25K+', label: 'Global Students' },
        { value: '180', label: 'Research Grants' },
        { value: '92%', label: 'Placement Rate' },
        { value: '42', label: 'Space Missions' }
    ];
}
