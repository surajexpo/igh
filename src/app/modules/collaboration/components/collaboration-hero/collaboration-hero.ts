import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-collaboration-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-[#0B0F19]">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0">
        <!-- Abstract Earth from Space imagery representation -->
        <div class="absolute inset-0 bg-[url('/assets/images/earth-space-dark.jpg')] bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"></div>
        
        <!-- Gradient Overlays for Deep Space Black to Earth Blue transition -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B0F19] lg:via-[#0B0F19]/90 to-transparent"></div>
        
        <!-- Subtle Global Cyan Glow / Connectivity abstract -->
        <div class="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#00B4D8]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#F4A261]/5 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow object-delay-[2s]"></div>
      </div>

      <!-- Network connecting lines (abstract purely decorative) -->
      <div class="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent bg-[length:20px_20px]"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div class="max-w-4xl">
          
          <!-- Diplomatic Gold Badge -->
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F4A261]/30 bg-[#F4A261]/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span class="w-2 h-2 rounded-full bg-[#F4A261] animate-pulse"></span>
            <span class="text-xs font-bold text-[#F4A261] tracking-[0.2em] uppercase">Global Partnership Hub</span>
          </div>

          <!-- Main Typography -->
          <h1 class="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up object-delay-100">
            Building Global Harmony Through <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#1B3A4B]">Space Education.</span>
          </h1>

          <p class="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-12 animate-fade-in-up object-delay-200">
            Uniting institutions, researchers, innovators, and governments to advance humanity through shared space science, sustainable technology, and borderless knowledge.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 animate-fade-in-up object-delay-300">
            <button class="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#1B3A4B] text-white font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transition-all duration-300 transform hover:-translate-y-1">
              Become a Partner
            </button>
            <button class="px-8 py-4 rounded-xl glass border border-[#F4A261]/30 text-white font-bold tracking-widest uppercase hover:bg-[#F4A261]/10 transition-all duration-300 transform hover:-translate-y-1">
              Submit Proposal
            </button>
            <button class="px-8 py-4 rounded-xl hover:bg-white/5 text-white/70 hover:text-white font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group">
              Explore Programs
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 group-hover:text-[#00B4D8] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CollaborationHeroComponent { }
