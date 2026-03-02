import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CurriculumModule {
    id: string;
    title: string;
    objectives: string[];
    labs: string;
    assessment: string;
    isOpen: boolean;
}

@Component({
    selector: 'app-curriculum-accordion',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-4xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Curriculum <span class="text-gradient">Framework</span></h2>
        <p class="text-white/50 text-lg">Deep dive into our interdisciplinary learning modules.</p>
      </div>

      <div class="space-y-4">
        @for (module of modules; track module.id) {
          <div class="glass rounded-2xl border border-white/5 overflow-hidden transition-all duration-300" 
               [class.border-accent-cyan/20]="module.isOpen">
            <button (click)="module.isOpen = !module.isOpen" 
                    class="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors">
              <div class="flex items-center gap-4">
                <span class="text-accent-cyan font-black tracking-widest uppercase text-[10px]">{{ module.id }}</span>
                <h3 class="text-lg font-bold text-white tracking-wide">{{ module.title }}</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" 
                   [class.rotate-180]="module.isOpen"
                   class="w-5 h-5 text-white/30 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div [class.hidden]="!module.isOpen" class="px-8 pb-8 animate-fade-in">
              <div class="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                <div class="space-y-4">
                  <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-white/30">Learning Objectives</h4>
                  <ul class="space-y-2">
                    @for (obj of module.objectives; track obj) {
                      <li class="flex items-start gap-2 text-sm text-white/60">
                        <span class="w-1 h-1 bg-accent-cyan rounded-full mt-2 shrink-0"></span>
                        {{ obj }}
                      </li>
                    }
                  </ul>
                </div>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-2">Practical Labs</h4>
                    <p class="text-sm text-white/60 italic leading-relaxed">{{ module.labs }}</p>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-2">Assessment</h4>
                    <p class="text-sm text-white/60 leading-relaxed">{{ module.assessment }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class CurriculumAccordionComponent {
    modules: CurriculumModule[] = [
        {
            id: 'MOD-01',
            title: 'Orbital Mechanics & Astrodynamics',
            objectives: ['Analyze Keplerian orbits', 'Calculate Hohmann transfers', 'Simulate N-body gravitational perturbations'],
            labs: 'Full-immersion orbital simulation using STK-like tools and custom Python scripts.',
            assessment: 'Mission design project involving a multi-stage trajectory calculation.',
            isOpen: true
        },
        {
            id: 'MOD-02',
            title: 'Satellite Communication Systems',
            objectives: ['Design link budgets', 'Optimize signal-to-noise ratios', 'Configure phased array antenna arrays'],
            labs: 'Hardware interfacing with Software Defined Radio (SDR) and ground station synchronization.',
            assessment: 'End-to-end data transmission test with simulated space-environment perturbations.',
            isOpen: false
        },
        {
            id: 'MOD-03',
            title: 'AI-Driven Autonomous Navigation',
            objectives: ['Implement SLAM on orbital platforms', 'Optimize neural networks for embedded systems', 'Develop resilient decision trees'],
            labs: 'GPU-accelerated training for vision-based docking and hazard avoidance.',
            assessment: 'Autonomous rover navigation test in a simulated martian terrain.',
            isOpen: false
        }
    ];
}
