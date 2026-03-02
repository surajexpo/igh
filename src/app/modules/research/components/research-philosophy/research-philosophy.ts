import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-research-philosophy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="space-y-12 animate-fade-in-up">
          <div class="space-y-4">
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Research <span class="text-gradient">Philosophy</span></h2>
            <p class="text-lg text-white/60 leading-relaxed">
              We believe that the future of humanity lies in the intersection of advanced technology and profound empathy. 
              Our scientific framework is built on three core pillars.
            </p>
          </div>

          <div class="space-y-8">
            <div class="flex gap-6 group">
              <div class="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Scientific Ethics Framework</h3>
                <p class="text-white/50 leading-relaxed">Prioritizing human welfare and planetary safety in every discovery. Our research undergoes rigorous ethical peer-review.</p>
              </div>
            </div>

            <div class="flex gap-6 group">
              <div class="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-white/10 group-hover:border-cosmic-purple/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-cosmic-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.065M15 20a5 5 0 11-10 0 5 5 0 0110 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Sustainable Innovation</h3>
                <p class="text-white/50 leading-relaxed">Developing technologies that don't just explore the cosmos, but preserve the delicate balance of our home planet.</p>
              </div>
            </div>

            <div class="flex gap-6 group">
              <div class="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0 border border-white/10 group-hover:border-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-2">Global Collaboration</h3>
                <p class="text-white/50 leading-relaxed">Breaking down borders and political barriers to unite the world's brightest minds in a singular mission for humanity.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-neon-blue/20 to-cosmic-purple/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative glass rounded-3xl border border-white/10 overflow-hidden aspect-square flex items-center justify-center p-12">
            <!-- Semi-abstract tech illustration -->
            <div class="relative w-full h-full">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-neon-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-cosmic-purple/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div class="w-16 h-16 bg-white rounded-full blur-xl opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.631.285a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.285-.631a6 6 0 00.517-3.86l-.477-2.388a2 2 0 01.547-1.022l1.16-1.16a2 2 0 012.828 2.828l-1.16 1.16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResearchPhilosophyComponent { }
