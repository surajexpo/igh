import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education-innovation-lab',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-space-black relative overflow-hidden">
      <!-- Decorators -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-midnight-blue/40 to-transparent"></div>
      <div class="absolute -left-40 top-1/4 w-96 h-96 bg-electric-cyan/10 blur-[150px] rounded-full"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Concept Art / Imagery Side -->
          <div class="order-2 lg:order-1 relative group">
            <div class="absolute inset-0 bg-gradient-to-tr from-electric-cyan/20 to-deep-violet/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="relative rounded-[3rem] border border-white/10 overflow-hidden bg-midnight-blue aspect-square lg:aspect-auto lg:h-[600px]">
              <div class="absolute inset-0 bg-[url('/assets/images/lab-placeholder.jpg')] bg-cover bg-center mix-blend-luminosity opacity-40 group-hover:scale-105 transition-transform duration-[2s]"></div>
              
              <!-- overlay gradients -->
              <div class="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-space-black/80 via-space-black/20 to-transparent"></div>

              <!-- Content inside image -->
              <div class="absolute bottom-10 left-10 right-10">
                <div class="glass p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div class="flex items-center gap-4 mb-2">
                    <span class="w-3 h-3 rounded-full bg-electric-cyan animate-pulse"></span>
                    <span class="text-xs font-bold text-white tracking-widest uppercase">Live Feed // Sector 7</span>
                  </div>
                  <h4 class="text-lg font-bold text-white">Quantum Simulation Lab</h4>
                  <p class="text-sm text-white/60 font-mono mt-1">Status: Active Exascale Processing</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Text Content -->
          <div class="order-1 lg:order-2 space-y-8">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10">
              <span class="text-xs font-bold tracking-widest text-neon-blue uppercase">Infrastructure</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              The <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-cyan">Technology-Driven</span> Academic Core
            </h2>
            
            <p class="text-lg text-white/70 font-light leading-relaxed">
              Our campus is not just a place of learning; it is a globally interconnected mega-laboratory. Students and faculty have unrestricted access to the most advanced research infrastructure on the planet.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div class="glass p-6 rounded-2xl border border-white/5 hover:border-electric-cyan/30 transition-colors bg-white/5 group">
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-electric-cyan transition-colors">Space AI Labs</h4>
                <p class="text-sm text-white/60">Dedicated neuromorphic clusters for training autonomous navigation and anomaly detection models.</p>
              </div>

              <div class="glass p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors bg-white/5 group">
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">Simulation Suites</h4>
                <p class="text-sm text-white/60">Immersive VR/AR environments mapping real-time topographical data from Martian and Lunar rovers.</p>
              </div>

              <div class="glass p-6 rounded-2xl border border-white/5 hover:border-deep-violet/30 transition-colors bg-white/5 group">
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-deep-violet transition-colors">Robotics Cleanrooms</h4>
                <p class="text-sm text-white/60">ISO 5 certified facilities for assembling and testing extra-planetary drone swarms.</p>
              </div>

              <div class="glass p-6 rounded-2xl border border-white/5 hover:border-white/30 transition-colors bg-white/5 group">
                <h4 class="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors">Computational Research</h4>
                <p class="text-sm text-white/60">Quantum-ready data centers calculating atmospheric fluid dynamics and orbital mechanics.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  `
})
export class EducationInnovationLabComponent { }
