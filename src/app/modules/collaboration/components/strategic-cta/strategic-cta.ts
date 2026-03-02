import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-strategic-cta',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 md:py-32 px-6 max-w-5xl mx-auto text-center relative">
      <div class="absolute inset-0 bg-gradient-to-t from-[#F4A261]/10 via-transparent to-transparent z-0 blur-3xl rounded-[4rem]"></div>
      
      <div class="glass relative z-10 p-12 md:p-24 rounded-[4rem] border border-white/10 bg-[#1B3A4B]/40 backdrop-blur-xl overflow-hidden group">
        
        <!-- Hover Glow -->
        <div class="absolute inset-0 bg-gradient-to-tr from-[#00B4D8]/10 to-[#F4A261]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <div class="relative z-10 space-y-10">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-tight uppercase">
            Collaborate Beyond <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-white drop-shadow-[0_0_15px_rgba(0,180,216,0.3)]">Borders</span>.<br>
            Educate Beyond <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A261] drop-shadow-[0_0_15px_rgba(244,162,97,0.3)]">Limits</span>.<br>
            Innovate for <span class="text-[#00B4D8]">Humanity</span>.
          </h2>
          
          <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <button class="px-10 py-5 rounded-2xl bg-white text-[#0B0F19] font-black tracking-widest uppercase hover:bg-[#00B4D8] hover:text-white hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] transition-all transform hover:-translate-y-1">
              Initiate Partnership
            </button>
            <button class="px-10 py-5 rounded-2xl glass border border-white/20 text-white font-black tracking-widest uppercase hover:bg-white/10 hover:border-[#F4A261]/50 transition-all transform hover:-translate-y-1">
              Download Framework
            </button>
          </div>

          <div class="pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8">
            <a href="mailto:collaboration@space-edu.org" class="text-xs font-bold text-white/50 hover:text-white transition-colors tracking-widest uppercase flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Office
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class StrategicCtaComponent { }
