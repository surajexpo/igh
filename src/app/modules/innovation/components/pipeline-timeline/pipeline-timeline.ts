import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PipelineStage {
    step: string;
    title: string;
    description: string;
}

@Component({
    selector: 'app-pipeline-timeline',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-midnight-blue relative overflow-hidden">
      <!-- Decorator -->
      <div class="absolute inset-0 z-0">
        <div class="absolute left-1/4 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electric-cyan/20 to-transparent transform -translate-y-1/2"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
            The Innovation <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-cyan">Pipeline Framework</span>
          </h2>
          <p class="text-white/60 text-lg">Our structured approach ensures that every theoretical breakthrough is rigorously evaluated, engineered, and scaled for maximum societal impact.</p>
        </div>

        <!-- Horizontal Timeline Wrapper -->
        <div class="relative overflow-x-auto pb-8 hide-scrollbar">
          
          <!-- Connecting Line (Desktop) -->
          <div class="hidden lg:block absolute top-[110px] left-[5%] right-[5%] h-[2px] bg-white/10">
            <!-- Animated Progress Indicator -->
            <div class="absolute left-0 top-0 h-full bg-gradient-to-r from-electric-cyan to-deep-violet w-full origin-left animate-[scale-x_4s_ease-in-out_infinite_alternate]"></div>
          </div>

          <div class="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-6 min-w-max lg:min-w-0">
            <!-- Stages -->
            <div *ngFor="let stage of stages; let i = index" class="relative flex flex-col items-center text-center w-64 group">
              
              <!-- Vertical Line (Mobile) -->
              <div *ngIf="i !== 0" class="lg:hidden w-[2px] h-12 bg-gradient-to-b from-electric-cyan/50 to-transparent my-4"></div>

              <!-- Node -->
              <div class="w-16 h-16 rounded-full bg-space-black border-4 border-midnight-blue outline outline-2 outline-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:outline-electric-cyan transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span class="text-xl font-black text-white group-hover:text-electric-cyan transition-colors">{{ stage.step }}</span>
                
                <!-- Pulse Effect -->
                <div class="absolute inset-0 rounded-full border border-electric-cyan/30 animate-ping opacity-0 group-hover:opacity-100"></div>
              </div>

              <!-- Content -->
              <h3 class="text-lg font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">{{ stage.title }}</h3>
              <p class="text-sm text-white/50 leading-relaxed">{{ stage.description }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
    styles: [`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    @keyframes scale-x {
      0% { transform: scaleX(0); }
      100% { transform: scaleX(1); }
    }
  `]
})
export class PipelineTimelineComponent {
    stages: PipelineStage[] = [
        {
            step: '01',
            title: 'Academic Conceptualization',
            description: 'Theoretical models and fundamental research formulated within our advanced academic programs.'
        },
        {
            step: '02',
            title: 'Research Validation',
            description: 'Rigorous peer review, mathematical proofs, and initial viability studies in simulated environments.'
        },
        {
            step: '03',
            title: 'Simulation & Testing',
            description: 'Stress-testing concepts through high-fidelity exascale computational modeling and AI prediction.'
        },
        {
            step: '04',
            title: 'Prototype Engineering',
            description: 'Physical manifestation of the concept in our interdisciplinary Maker Labs and cleanrooms.'
        },
        {
            step: '05',
            title: 'Field Implementation',
            description: 'Sub-orbital testing, analogue environment deployment, and real-world data collection.'
        },
        {
            step: '06',
            title: 'Global Scaling',
            description: 'Partnering with industry and government to deploy the technology for humanity-wide benefit.'
        }
    ];
}
