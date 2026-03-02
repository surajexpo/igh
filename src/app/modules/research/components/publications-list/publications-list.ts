import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-publications-list',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Recent <span class="text-gradient">Publications</span></h2>
        <p class="text-white/50 text-lg">Insights from the forefront of space research and innovation.</p>
      </div>

      <div class="space-y-6">
        @for (pub of publications; track pub.id) {
          <div class="glass p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-8 items-start hover:border-white/10 transition-all group">
            <div class="w-full md:w-3/4 space-y-4">
              <div class="flex items-center gap-4 text-xs font-bold tracking-widest text-cyan-400 uppercase">
                <span>{{ pub.date }}</span>
                <span class="w-1 h-1 bg-white/20 rounded-full"></span>
                <span>{{ pub.category }}</span>
              </div>
              <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-neon-blue transition-colors">
                {{ pub.title }}
              </h3>
              <p class="text-white/40 text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {{ pub.abstract }}
              </p>
              <div class="text-xs text-white/30 italic">Authors: {{ pub.authors }}</div>
            </div>
            
            <div class="w-full md:w-1/4 flex md:flex-col gap-4">
              <button class="flex-1 py-3 px-4 glass border border-white/10 rounded-xl text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-space-black transition-all">
                Download PDF
              </button>
              <button class="flex-1 py-3 px-4 text-white/40 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">
                DOI Link
              </button>
            </div>
          </div>
        }
      </div>

      <div class="mt-12 flex justify-center gap-4">
        <button class="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-lg bg-neon-blue text-space-black flex items-center justify-center font-bold text-xs">1</span>
          <span class="w-8 h-8 rounded-lg glass border border-white/5 text-white/50 flex items-center justify-center font-bold text-xs hover:text-white cursor-pointer">2</span>
          <span class="w-8 h-8 rounded-lg glass border border-white/5 text-white/50 flex items-center justify-center font-bold text-xs hover:text-white cursor-pointer">3</span>
        </div>
        <button class="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  `
})
export class PublicationsListComponent {
    publications = [
        {
            id: '1',
            date: 'OCT 2025',
            category: 'Deep Space Propulsion',
            title: 'Thermodynamic Efficiency of Plasma Thrusters in Vacuum States',
            abstract: 'An investigation into the energy dissipation patterns of xenon plasma thrusters during sustained acceleration phases beyond 0.5c theoretical limits.',
            authors: 'V. Petrov, L. Nakamura, J. Smith'
        },
        {
            id: '2',
            date: 'AUG 2025',
            category: 'Astro-Biology',
            title: 'Microbial Resilience in Sub-Surface Enceladus Oceans',
            abstract: 'Analysis of genetic adaptation mechanisms required for extremophilic survival in high-salinity hydrothermal vents of Saturnian moons.',
            authors: 'M. Garcia, E. Wright'
        }
    ];
}
