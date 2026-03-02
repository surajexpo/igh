import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-research-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 px-6">
      <!-- Background Effects -->
      <div class="absolute inset-0 bg-cosmic opacity-50"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-space-black/50 to-space-black"></div>
      
      <!-- Animated Star Field (Subtle CSS) -->
      <div class="stars-container absolute inset-0 pointer-events-none">
        <div class="star scale-50 opacity-20 absolute top-1/4 left-1/4 animate-pulse"></div>
        <div class="star scale-75 opacity-30 absolute top-1/2 left-3/4 animate-pulse delay-700"></div>
        <div class="star opacity-40 absolute top-3/4 left-1/2 animate-pulse delay-1000"></div>
      </div>

      <div class="relative z-10 max-w-5xl w-full">
        <div class="glass p-8 md:p-16 rounded-3xl border border-white/10 backdrop-blur-2xl text-center animate-fade-in-up">
          <span class="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium tracking-wider uppercase mb-8">
            Global Research Initiative
          </span>
          
          <h1 class="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Advancing <span class="text-gradient">Human Civilization</span> <br class="hidden md:block">
            Through Space Research
          </h1>
          
          <p class="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Engineering knowledge that transforms Earth and expands humanity’s cosmic footprint. 
            From sustainable planetary systems to human consciousness models.
          </p>

          <div class="flex flex-wrap justify-center gap-6">
            <button class="px-8 py-4 rounded-xl bg-neon-blue text-space-black font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-neon-blue/20">
              Explore Domains
            </button>
            <button class="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1">
              Submit Proposal
            </button>
            <button class="px-8 py-4 rounded-xl text-white/80 hover:text-white transition-colors flex items-center gap-2 group">
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
    styles: [`
    .stars-container {
      background: radial-gradient(circle at center, transparent 0%, #050505 100%);
    }
    .star {
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px white;
    }
  `]
})
export class ResearchHeroComponent { }
