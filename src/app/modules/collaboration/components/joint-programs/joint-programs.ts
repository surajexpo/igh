import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JointProgram {
    title: string;
    partners: string[];
    duration: string;
    impact: string;
    status: 'Active' | 'Completed' | 'Recruiting';
    statusColorClass: string;
}

@Component({
    selector: 'app-joint-programs',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-4">
              Flagship <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#1B3A4B] to-white">Initiatives</span>
            </h2>
            <p class="text-lg text-white/50 font-light">
              High-impact collaborative programs currently driving the leading edge of space science and earthly applications.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div *ngFor="let program of programs" class="glass p-8 md:p-10 rounded-[2rem] border border-white/5 bg-[#1B3A4B]/10 hover:bg-[#1B3A4B]/30 hover:border-white/20 transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-1">
            
            <div class="flex justify-between items-start mb-6">
              <div [ngClass]="['px-3 py-1 rounded-full border text-xs font-bold tracking-widest uppercase flex items-center gap-2', program.statusColorClass]">
                <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                {{ program.status }}
              </div>
            </div>

            <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00B4D8] transition-colors line-clamp-2">
              {{ program.title }}
            </h3>
            
            <p class="text-white/70 text-sm leading-relaxed mb-8 flex-1">
              {{ program.impact }}
            </p>

            <div class="space-y-4 pt-6 border-t border-white/10 mt-auto">
              
              <div class="flex flex-col gap-1">
                <span class="text-[10px] font-bold text-white/40 uppercase tracking-widest">Collaborating Institutions</span>
                <p class="text-sm font-medium text-white/90">
                  {{ program.partners.join(' • ') }}
                </p>
              </div>

              <div class="flex flex-col gap-1">
                <span class="text-[10px] font-bold text-white/40 uppercase tracking-widest">Program Duration</span>
                <p class="text-sm font-medium text-white/90">{{ program.duration }}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class JointProgramsComponent {
    programs: JointProgram[] = [
        {
            title: 'Global Space Fellowship Cohort IV',
            partners: ['MIT AeroAstro', 'ESA Education', 'JAXA'],
            duration: '24 Months (2025-2027)',
            impact: 'Fully funding 50 doctoral candidates across 12 countries to research modular orbital habitats.',
            status: 'Recruiting',
            statusColorClass: 'text-[#00B4D8] border-[#00B4D8]/30 bg-[#00B4D8]/10'
        },
        {
            title: 'Collaborative Satellite Research Consortium (CSRC)',
            partners: ['Stanford', 'NASA Jet Propulsion Lab', 'Lockheed Martin'],
            duration: 'Ongoing (Started 2022)',
            impact: 'Developing open-source miniaturized quantum communication payloads for CubeSats.',
            status: 'Active',
            statusColorClass: 'text-[#F4A261] border-[#F4A261]/30 bg-[#F4A261]/10'
        },
        {
            title: 'Climate Monitoring Initiative: Earth-Sync',
            partners: ['Oxford Univ.', 'NOAA', 'Global Environmental Fund'],
            duration: '5 Years Strategic Plan',
            impact: 'Deploying a unified constellation of lower-earth-orbit sensors to track greenhouse gas emissions in real-time.',
            status: 'Active',
            statusColorClass: 'text-[#F4A261] border-[#F4A261]/30 bg-[#F4A261]/10'
        },
        {
            title: 'International Space Education Summit 2024',
            partners: ['Harvard', 'ISRO', 'SpaceX Education Outreach'],
            duration: 'Annual Cycle (Completed Dec 2024)',
            impact: 'Gathered 5,000 educators globally to standardize K-12 astrophysics curriculums in developing nations.',
            status: 'Completed',
            statusColorClass: 'text-white/60 border-white/20 bg-white/5'
        }
    ];
}
