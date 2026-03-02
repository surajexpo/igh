import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CaseStudy {
    title: string;
    problem: string;
    contribution: string;
    solution: string;
    impact: string;
    whitepaperUrl: string;
}

@Component({
    selector: 'app-case-studies',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-space-black relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div class="max-w-3xl">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Impact <span class="text-transparent bg-clip-text bg-gradient-to-r from-deep-violet to-neon-blue">Case Studies</span>
            </h2>
            <p class="text-white/60 text-lg">
              Detailed examinations of how our space-derived technologies are deployed to solve critical challenges on Earth and beyond.
            </p>
          </div>
        </div>

        <div class="space-y-12">
          
          <div *ngFor="let study of caseStudies; let isEven = index" class="glass rounded-[2rem] border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md group hover:border-deep-violet/30 transition-colors duration-500">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              <!-- Sidebar / Info -->
              <div class="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-midnight-blue/50 flex flex-col justify-between">
                <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-violet/20 border border-deep-violet/30 mb-6">
                    <span class="text-[10px] font-bold tracking-widest text-deep-violet uppercase">Case Study</span>
                  </div>
                  <h3 class="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight group-hover:text-neon-blue transition-colors">
                    {{ study.title }}
                  </h3>
                </div>
                
                <button class="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/20 hover:border-electric-cyan hover:bg-electric-cyan/10 transition-all duration-300 w-fit group/btn">
                  <span class="text-sm font-bold tracking-widest text-white uppercase group-hover/btn:text-electric-cyan transition-colors">Download Whitepaper</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white/50 group-hover/btn:text-electric-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>

              <!-- Main Content Grid -->
              <div class="lg:col-span-8 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-gradient-to-br from-transparent to-midnight-blue/20">
                
                <div class="space-y-3">
                  <h4 class="text-sm font-bold text-electric-cyan tracking-widest uppercase flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-electric-cyan"></span> Problem Statement
                  </h4>
                  <p class="text-white/70 text-sm leading-relaxed">{{ study.problem }}</p>
                </div>

                <div class="space-y-3">
                  <h4 class="text-sm font-bold text-neon-blue tracking-widest uppercase flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-neon-blue"></span> Education Contribution
                  </h4>
                  <p class="text-white/70 text-sm leading-relaxed">{{ study.contribution }}</p>
                </div>

                <div class="space-y-3">
                  <h4 class="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-white"></span> Technological Solution
                  </h4>
                  <p class="text-white/70 text-sm leading-relaxed">{{ study.solution }}</p>
                </div>

                <div class="space-y-3">
                  <h4 class="text-sm font-bold text-deep-violet tracking-widest uppercase flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-deep-violet"></span> Societal Impact
                  </h4>
                  <p class="text-white/70 text-sm leading-relaxed">{{ study.impact }}</p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CaseStudiesComponent {
    caseStudies: CaseStudy[] = [
        {
            title: 'Project AQUA: Decentralized Orbital Desalination',
            problem: 'Severe water scarcity in arid equatorial regions exacerbated by unpredictable climate shifts.',
            contribution: 'Developed in the Advanced Fluid Dynamics Lab by doctoral candidates researching capillary action in microgravity.',
            solution: 'A low-orbit concentrated solar power array that beams microwave energy to modular, highly efficient terrestrial desalination plants.',
            impact: 'Provides clean drinking water to over 2 million people globally while operating entirely off the carbon grid.',
            whitepaperUrl: '#'
        },
        {
            title: 'Neural-Sync: Adaptive Prosthetics',
            problem: 'High rejection rates and mobility limitations in traditional mechanical prosthetics for trauma survivors.',
            contribution: 'Originated as a cross-disciplinary capstone project between the Aerospace Robotics and Neuro-Engineering departments.',
            solution: 'An AI-driven neuro-interface that maps peripheral nerve impulses to robotic limbs with near-zero latency, originally designed for IVA spacesuit manipulation.',
            impact: 'Restored near-natural dexterity to 500+ trial participants, dramatically improving quality of life and independence.',
            whitepaperUrl: '#'
        }
    ];
}
