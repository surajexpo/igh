import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineStage {
    step: number;
    title: string;
    description: string;
    icon: string;
    colorClass: string;
    isActive: boolean;
}

@Component({
    selector: 'app-exchange-timeline',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative overflow-hidden text-center lg:text-left">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <!-- Left Content -->
          <div class="lg:w-1/3 space-y-8 flex flex-col justify-center">
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              Research <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#F4A261] to-[#00B4D8]">& Exchange</span> Lifecycle
            </h2>
            <p class="text-lg text-white/60 font-light leading-relaxed">
              Our structured approach to institutional collaboration ensures seamless integration of personnel, intellectual property, and technological capabilities.
            </p>
            
            <div class="p-6 glass rounded-2xl border border-white/10 bg-[#1B3A4B]/20 inline-block w-fit mx-auto lg:mx-0">
              <span class="block text-[10px] font-bold text-white/50 tracking-widest uppercase mb-2">Average Deployment Time</span>
              <span class="text-3xl font-black text-[#00B4D8]">12-18 <span class="text-lg font-light text-white/50">Months</span></span>
            </div>
          </div>

          <!-- Right Timeline -->
          <div class="lg:w-2/3 relative py-12">
            
            <!-- Connecting Line (Desktop) -->
            <div class="absolute left-[39px] md:left-1/2 lg:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1B3A4B] via-[#00B4D8]/50 to-transparent"></div>

            <div class="space-y-12 relative">
              
              <div *ngFor="let stage of timeline" class="relative flex flex-col md:flex-row lg:flex-row items-center md:justify-center lg:justify-start gap-8 group">
                
                <!-- Timeline Node -->
                <div [ngClass]="['w-20 h-20 rounded-2xl border-2 flex items-center justify-center shrink-0 z-10 glass shadow-[0_0_20px_rgba(0,180,216,0.2)] transition-all duration-500 group-hover:scale-110 ml-0 md:ml-[-38px] lg:ml-2', stage.isActive ? 'border-[#00B4D8] bg-[#00B4D8]/20' : 'border-white/20 bg-[#0B0F19]/80 group-hover:border-[#00B4D8]/50']">
                  <span class="text-2xl opacity-70 group-hover:opacity-100 transition-opacity" [innerHTML]="stage.icon"></span>
                </div>

                <!-- Content Card -->
                <div class="glass p-6 md:p-8 rounded-3xl border border-white/5 bg-[#1B3A4B]/30 hover:bg-[#1B3A4B]/50 transition-colors flex-1 text-left relative w-full flex flex-col justify-center min-h-[140px]">
                  
                  <!-- Responsive Connector Arrow -->
                  <div class="absolute w-4 h-4 bg-[#1B3A4B]/30 border-l border-b border-white/5 transform rotate-45 -left-2 top-8 hidden lg:block group-hover:bg-[#1B3A4B]/50 transition-colors"></div>

                  <span class="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2 block">Stage 0{{ stage.step }}</span>
                  <h3 class="text-xl font-bold text-white mb-2">{{ stage.title }}</h3>
                  <p class="text-sm text-white/60 leading-relaxed">{{ stage.description }}</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ExchangeTimelineComponent {
    timeline: TimelineStage[] = [
        {
            step: 1,
            title: 'Institutional Agreement & MoU',
            description: 'Formalization of partnership goals, intellectual property frameworks, and shared funding structures.',
            icon: '🤝',
            colorClass: 'text-white',
            isActive: true
        },
        {
            step: 2,
            title: 'Curriculum & Systems Integration',
            description: 'Mapping of academic programs and establishing secure data pipelines for shared research databases.',
            icon: '⚙️',
            colorClass: 'text-white',
            isActive: false
        },
        {
            step: 3,
            title: 'Student & Faculty Mobility',
            description: 'Physical and virtual exchange comprising doctoral residencies and cross-institutional faculty appointments.',
            icon: '✈️',
            colorClass: 'text-white',
            isActive: false
        },
        {
            step: 4,
            title: 'Joint Research Deployment',
            description: 'Active execution of collaborative projects utilizing combined institutional infrastructure and orbital assets.',
            icon: '🚀',
            colorClass: 'text-white',
            isActive: false
        },
        {
            step: 5,
            title: 'Innovation & Impact Assessment',
            description: 'Evaluation of deployed technologies and publication of joint findings to the global scientific community.',
            icon: '📊',
            colorClass: 'text-white',
            isActive: false
        }
    ];
}
