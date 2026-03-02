import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InnovationDomain {
  icon: string;
  title: string;
  summary: string;
  slug: string;
}

@Component({
  selector: 'app-core-innovations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-space-black relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Innovation <span class="text-transparent bg-clip-text bg-gradient-to-r from-deep-violet to-electric-cyan">Domains</span>
          </h2>
          <p class="text-lg text-white/60 font-light">
            Explore the frontiers of our research and the tangible technologies we are developing to elevate human capability and ensure planetary sustainability.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let domain of domains" class="group relative block p-[1px] rounded-2xl overflow-hidden bg-white/5 hover:bg-gradient-to-b hover:from-electric-cyan/50 hover:to-deep-violet/50 transition-all duration-500">
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="relative h-full bg-space-black/90 backdrop-blur-xl p-8 rounded-[15px] flex flex-col items-start border border-white/5 group-hover:border-transparent transition-colors">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-cyan/20 to-deep-violet/20 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <span class="text-2xl">{{ domain.icon }}</span>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors">{{ domain.title }}</h3>
              <p class="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                {{ domain.summary }}
              </p>
              
              <a [href]="'/innovation/' + domain.slug" class="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-white uppercase group-hover:text-electric-cyan transition-colors mt-auto">
                <span class="w-8 h-px bg-white/30 group-hover:bg-electric-cyan/50 group-hover:w-12 transition-all duration-300 relative before:hidden"></span>
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `
})
export class CoreInnovationsComponent {
  domains: InnovationDomain[] = [
    {
      icon: '🛰️',
      title: 'Satellite Intelligence Systems',
      summary: 'Advanced orbital networks leveraging quantum sensors for real-time Earth observation and deep-space telemetry.',
      slug: 'satellite-intelligence'
    },
    {
      icon: '🧠',
      title: 'AI-Powered Space Analytics',
      summary: 'Neuromorphic computing applied to astrophysical data streams, predicting cosmic events and optimizing mission parameters.',
      slug: 'ai-space-analytics'
    },
    {
      icon: '🤖',
      title: 'Space Robotics & Autonomous Systems',
      summary: 'Self-repairing rovers and zero-gravity manufacturing bots designed for extra-planetary colonization and resource extraction.',
      slug: 'space-robotics'
    },
    {
      icon: '☀️',
      title: 'Space-Based Renewable Energy',
      summary: 'Orbital solar arrays and microwave power transmission grids aimed at providing limitless zero-carbon energy to Earth.',
      slug: 'space-renewable-energy'
    },
    {
      icon: '🌌',
      title: 'Advanced Computational Modeling',
      summary: 'Exascale simulations of planetary climates, fluid dynamics, and quantum mechanics for both Earth preservation and deep space travel.',
      slug: 'computational-modeling'
    },
    {
      icon: '🌍',
      title: 'Sustainable Planetary Engineering',
      summary: 'Closed-loop ecological life support systems and terraforming technologies designed to ensure the long-term survival of human habitats.',
      slug: 'planetary-engineering'
    },
    {
      icon: '📡',
      title: 'Space Communication Infrastructure',
      summary: 'Deep-space optical communication arrays and quantum-entangled relays establishing an interplanetary internet backbone.',
      slug: 'communication-infrastructure'
    },
    {
      icon: '🦾',
      title: 'Human-Machine Synergy Systems',
      summary: 'Neural interfaces and powered exoskeletons designed to enhance human endurance and capabilities in extreme space environments.',
      slug: 'human-machine-synergy'
    },
    {
      icon: '🌦️',
      title: 'Climate & Earth Monitoring',
      summary: 'Precision multispectral satellite constellations providing actionable intelligence for global climate change mitigation and disaster response.',
      slug: 'climate-monitoring'
    }
  ];
}
