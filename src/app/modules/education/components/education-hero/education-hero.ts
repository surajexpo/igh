import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-24 px-6">
      <!-- Background with softer academic feel -->
      <div class="absolute inset-0 bg-[#0B0F19]"></div>
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#4CC9F0,transparent_70%)]"></div>
      
      <!-- Subtle animated starfield -->
      <div class="absolute inset-0 pointer-events-none opacity-30">
        <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div class="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div class="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      </div>

      <div class="relative z-10 max-w-5xl w-full text-center">
        <div class="glass p-10 md:p-20 rounded-[3rem] border border-white/10 backdrop-blur-3xl animate-fade-in-up">
          <span class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-cyan text-sm font-bold tracking-widest uppercase mb-8">
            Global Academic Authority
          </span>
          
          <h1 class="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            Empowering Humanity Through <br class="hidden md:block">
            <span class="text-gradient">Space Education</span>
          </h1>
          
          <p class="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transforming learners into innovators, researchers, and global contributors through advanced space science and technology programs.
          </p>

          <div class="flex flex-wrap justify-center gap-6">
            <button class="px-8 py-4 rounded-xl bg-accent-cyan text-space-black font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-accent-cyan/20">
              Explore Programs
            </button>
            <button class="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Apply Now
            </button>
            <button class="px-8 py-4 rounded-xl text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
              Download Brochure
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `
})
export class EducationHeroComponent { }
