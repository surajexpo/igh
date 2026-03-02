import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface EducationProgram {
    id: string;
    title: string;
    duration: string;
    mode: 'Online' | 'Hybrid' | 'In-person' | 'Research-Based';
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Fellowship';
    description: string;
    slug: string;
}

@Component({
    selector: 'app-program-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="glass p-8 rounded-3xl border border-white/10 hover:border-accent-cyan/30 transition-all duration-500 group flex flex-col h-full relative overflow-hidden">
      <!-- Top Badges -->
      <div class="flex justify-between items-start mb-6">
        <span class="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-white/5 border border-white/10 text-white/50">
          {{ program.duration }}
        </span>
        <span [class]="getLevelClass(program.level)" class="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          {{ program.level }}
        </span>
      </div>

      <h3 class="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-accent-cyan transition-colors">
        {{ program.title }}
      </h3>
      
      <p class="text-white/40 text-sm leading-relaxed mb-8 flex-grow">
        {{ program.description }}
      </p>

      <div class="space-y-4">
        <div class="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white/30 mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
          {{ program.mode }}
        </div>

        <div class="grid grid-cols-2 gap-4 mt-auto">
          <button class="py-3 px-4 rounded-xl glass border border-white/10 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
            View Curriculum
          </button>
          <button class="py-3 px-4 rounded-xl bg-accent-cyan text-space-black text-[10px] font-bold tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-1">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  `
})
export class ProgramCardComponent {
    @Input() program!: EducationProgram;

    getLevelClass(level: string) {
        switch (level) {
            case 'Beginner': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
            case 'Intermediate': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
            case 'Advanced': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
            case 'Fellowship': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
            default: return 'bg-white/10 text-white';
        }
    }
}
