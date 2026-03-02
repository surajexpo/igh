import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CollaborationModel {
    title: string;
    objective: string;
    frameworks: string[];
    slug: string;
    icon: string;
    colorClass: string;
    bgClass: string;
}

@Component({
    selector: 'app-collaboration-models',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative z-10">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Structured <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#F4A261] to-[#00B4D8]">Engagement</span> Models
          </h2>
          <p class="text-lg text-white/60 font-light">
            We provide tailored frameworks for diverse institutional partners to engage directly with our space education and research pipeline.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div *ngFor="let model of models" [ngClass]="['group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500 bg-white/5 hover:bg-gradient-to-br', model.bgClass]">
            
            <div class="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-white"></div>
            
            <div class="relative h-full bg-[#0B0F19]/90 backdrop-blur-xl p-8 rounded-[23px] flex flex-col items-start transition-colors">
              
              <div [ngClass]="['w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 border border-white/5', model.colorClass]">
                <span class="text-3xl" [innerHTML]="model.icon"></span>
              </div>
              
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">{{ model.title }}</h3>
              <p class="text-white/60 text-sm leading-relaxed mb-8">
                {{ model.objective }}
              </p>
              
              <div class="w-full mb-8 flex-1">
                <p class="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Engagement Framework</p>
                <ul class="space-y-3 relative z-10 w-full">
                  <li *ngFor="let framework of model.frameworks" class="text-sm text-white/80 flex items-center gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/70 transition-colors"></span>
                    {{ framework }}
                  </li>
                </ul>
              </div>
              
              <!-- CTA Button -->
              <a [href]="'/collaboration/' + model.slug" class="w-full py-4 text-center rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold tracking-widest uppercase transition-all duration-300 border border-white/10 mt-auto group/btn overflow-hidden relative">
                <span class="relative z-10 flex items-center justify-center gap-2">
                  Explore Model
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div [ngClass]="['absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 opacity-20', model.colorClass]"></div>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class CollaborationModelsComponent {
    models: CollaborationModel[] = [
        {
            title: 'Academic Partnerships',
            objective: 'Merge curriculums and share intellectual resources to elevate the global standard of aerospace education.',
            frameworks: [
                'Joint curriculum development',
                'Faculty exchange programs',
                'Research co-supervision'
            ],
            slug: 'academic',
            icon: '🏛️',
            colorClass: 'bg-[#00B4D8]/20 text-[#00B4D8]',
            bgClass: 'from-[#00B4D8]/50 to-transparent'
        },
        {
            title: 'Government Alliances',
            objective: 'Align emerging technologies with national strategic goals to enhance public innovation sectors.',
            frameworks: [
                'National space education programs',
                'Policy advisory collaborations',
                'Public innovation initiatives'
            ],
            slug: 'government',
            icon: '🏛️', // using classical building for govt as well, but different style
            colorClass: 'bg-[#1B3A4B]/50 text-white',
            bgClass: 'from-[#1B3A4B]/80 to-transparent'
        },
        {
            title: 'Industry Collaboration',
            objective: 'Bridge the gap between academic research and commercial aerospace manufacturing and deployment.',
            frameworks: [
                'Co-developed technologies',
                'Research commercialization',
                'Workforce development pipelines'
            ],
            slug: 'industry',
            icon: '⚙️',
            colorClass: 'bg-[#F4A261]/20 text-[#F4A261]',
            bgClass: 'from-[#F4A261]/50 to-transparent'
        },
        {
            title: 'International Consortia',
            objective: 'Participate in massively funded, cross-border research missions that require multinational cooperation.',
            frameworks: [
                'Cross-border funded projects',
                'Global research missions',
                'Shared infrastructure programs'
            ],
            slug: 'international-consortia',
            icon: '🌐',
            colorClass: 'bg-[#00B4D8]/20 text-[#00B4D8]',
            bgClass: 'from-[#00B4D8]/50 to-transparent'
        },
        {
            title: 'Startup Incubation',
            objective: 'Accelerate disruptive space-tech concepts by providing foundational support and institutional backing.',
            frameworks: [
                'Space-tech incubators',
                'Mentorship programs',
                'Seed innovation grants'
            ],
            slug: 'startup-incubation',
            icon: '🚀',
            colorClass: 'bg-white/10 text-white',
            bgClass: 'from-white/30 to-transparent'
        }
    ];
}
