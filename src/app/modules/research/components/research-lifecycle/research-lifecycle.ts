import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-research-lifecycle',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Research <span class="text-gradient">Lifecycle</span></h2>
        <p class="text-white/50 max-w-2xl mx-auto text-lg">Our structured framework for transforming visionary ideas into global reality.</p>
      </div>

      <div class="relative px-4 pb-12">
        <!-- Animated Progress Line -->
        <div class="absolute top-[3.25rem] left-0 w-full h-1 bg-white/5 hidden md:block">
          <div class="absolute h-full bg-gradient-to-r from-neon-blue via-cosmic-purple to-neon-blue w-2/3 animate-[progress_10s_linear_infinite]"></div>
        </div>

        <!-- Timeline Steps -->
        <div class="grid grid-cols-1 md:grid-cols-6 gap-8 relative">
          @for (step of steps; track step.title) {
            <div class="text-center group">
              <!-- Step Circle -->
              <div class="w-12 h-12 md:w-16 md:h-16 rounded-full glass border border-white/10 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-neon-blue/50 group-hover:scale-110 transition-all duration-300">
                <span class="text-white font-bold">{{ step.id }}</span>
              </div>
              
              <!-- Step Content -->
              <div class="space-y-2">
                <h3 class="text-lg font-bold text-white tracking-tight group-hover:text-neon-blue transition-colors">{{ step.title }}</h3>
                <p class="text-xs md:text-sm text-white/40 leading-relaxed px-4">{{ step.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
    styles: [`
    @keyframes progress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `]
})
export class ResearchLifecycleComponent {
    steps = [
        { id: '01', title: 'Ideation', description: 'Theoretical conceptualization and literature review.' },
        { id: '02', title: 'Feasibility', description: 'Technical analysis and resource allocation.' },
        { id: '03', title: 'Simulation', description: 'Advanced computational modeling and orbital mapping.' },
        { id: '04', title: 'Prototype', description: 'Iterative hardware and software engineering.' },
        { id: '05', title: 'Field Test', description: 'Rigorous validation in extreme environments.' },
        { id: '06', title: 'Deployment', description: 'Global release and real-world impact monitoring.' }
    ];
}
