import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-innovation-hero',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-space-black">
      <!-- Futuristic Deep Space Backdrop & Grid lines -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[url('/assets/images/stars-bg.png')] opacity-30 mix-blend-screen bg-cover bg-center"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-midnight-blue/40"></div>
      </div>

      <!-- Animated Glow Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan/20 blur-[100px] rounded-full animate-pulse z-0 mix-blend-screen"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-deep-violet/20 blur-[120px] rounded-full animate-pulse delay-700 z-0 mix-blend-screen"></div>

      <!-- Content Container -->
      <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-cyan/30 bg-electric-cyan/10 backdrop-blur-md mb-8 animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-electric-cyan animate-ping"></span>
          <span class="text-xs font-bold tracking-widest text-electric-cyan uppercase">Space Education & Research</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.1] mb-8 animate-fade-in-up" style="animation-delay: 100ms;">
          From Space Education to <br class="hidden md:block">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-deep-violet drop-shadow-[0_0_20px_rgba(0,245,212,0.3)]">Global Innovation</span>
        </h1>

        <!-- Subheading -->
        <p class="max-w-3xl mx-auto text-lg md:text-2xl text-white/70 font-light leading-relaxed mb-12 animate-fade-in-up" style="animation-delay: 200ms;">
          Transforming academic excellence into scalable technologies that elevate human civilization and define the future of Earth.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center items-center gap-6 animate-fade-in-up" style="animation-delay: 300ms;">
          <button class="px-8 py-4 rounded-xl bg-electric-cyan text-space-black font-bold tracking-wider uppercase hover:bg-white hover:text-space-black hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            Explore Innovations
          </button>
          
          <button class="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold tracking-wider uppercase hover:bg-white/10 hover:border-electric-cyan/50 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-lg">
            Launch With Us
          </button>
        </div>

        <!-- Optional subtle text link -->
        <div class="mt-8 animate-fade-in-up" style="animation-delay: 400ms;">
          <a href="#partner" class="text-sm font-medium text-white/50 hover:text-electric-cyan transition-colors border-b border-transparent hover:border-electric-cyan pb-1">
            Become a Technology Partner
          </a>
        </div>
      </div>
    </section>
  `
})
export class InnovationHeroComponent { }
