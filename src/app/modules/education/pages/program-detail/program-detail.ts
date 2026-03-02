import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-program-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-space-black pt-32 px-6 max-w-4xl mx-auto">
      <a routerLink="/education" class="text-accent-cyan text-xs font-black tracking-widest uppercase flex items-center gap-2 mb-12 hover:text-white transition-colors group">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Programs
      </a>

      <div class="glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent"></div>
        <div class="relative z-10 space-y-6">
          <span class="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black tracking-widest uppercase">Academic Program</span>
          <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tighter">Program <span class="text-gradient">Detail</span></h1>
          <p class="text-white/50 text-lg leading-relaxed max-w-2xl">
            Detailed curriculum, faculty assignments, and enrollment criteria for this specific academic pathway are being synchronized with the global database.
          </p>
          <div class="pt-10 border-t border-white/5">
             <button class="px-8 py-4 rounded-xl bg-accent-cyan text-space-black font-bold hover:bg-white transition-all">Download Syllabus</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProgramDetailComponent { }
