import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-global-network',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative overflow-hidden">
      
      <!-- Abstract world map backdrop using CSS patterns/gradients -->
      <div class="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <div class="w-[800px] h-[400px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px] rounded-full blur-sm"></div>
      </div>

      <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19] z-0"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div class="max-w-3xl">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Institutional <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-white">Footprint</span>
            </h2>
            <p class="text-lg text-white/60 font-light">
              Our network spans continents, uniting the brightest minds across prestigious universities, national space agencies, and pioneering technology firms.
            </p>
          </div>
          <div class="flex gap-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#00B4D8] animate-pulse"></span>
              <span class="text-sm font-bold text-white/50 tracking-widest uppercase">Active Nodes</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#1B3A4B]"></span>
              <span class="text-sm font-bold text-white/50 tracking-widest uppercase">Planned Expansions</span>
            </div>
          </div>
        </div>

        <!-- Network Data Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="glass p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
            <div class="w-12 h-12 rounded-full bg-[#00B4D8]/20 flex items-center justify-center mb-6 text-[#00B4D8]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-4xl font-black text-white mb-2 group-hover:text-[#00B4D8] transition-colors">142</h3>
            <p class="text-sm font-bold tracking-widest text-white/50 uppercase">Partner Institutions</p>
          </div>

          <div class="glass p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
            <div class="w-12 h-12 rounded-full bg-[#F4A261]/20 flex items-center justify-center mb-6 text-[#F4A261]">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-4xl font-black text-white mb-2 group-hover:text-[#F4A261] transition-colors">38</h3>
            <p class="text-sm font-bold tracking-widest text-white/50 uppercase">Countries Engaged</p>
          </div>

          <div class="glass p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
            <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-4xl font-black text-white mb-2 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">27</h3>
            <p class="text-sm font-bold tracking-widest text-white/50 uppercase">Research Missions</p>
          </div>

          <div class="glass p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
            <div class="w-12 h-12 rounded-full bg-[#1B3A4B] flex items-center justify-center mb-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-4xl font-black text-white mb-2 group-hover:text-[#00B4D8] transition-colors">3,500+</h3>
            <p class="text-sm font-bold tracking-widest text-white/50 uppercase">Cross-Border Fellows</p>
          </div>

        </div>

      </div>
    </section>
  `
})
export class GlobalNetworkComponent { }
