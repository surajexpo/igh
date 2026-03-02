import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-innovation-philosophy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-midnight-blue relative overflow-hidden">
      <!-- Background Accents -->
      <div class="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div class="absolute right-0 top-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[150px] rounded-full"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left Panel: Philosophy Text -->
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-deep-violet/30 bg-deep-violet/10">
              <span class="text-xs font-bold tracking-widest text-deep-violet uppercase">Our Paradigm</span>
            </div>
            
            <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              Innovation is <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-blue">Engineered</span>.
            </h2>
            
            <p class="text-lg text-white/70 font-light leading-relaxed">
              We believe that technological breakthroughs are not accidental. They are the deliberate outcome of structured learning, scientific rigor, and interdisciplinary collaboration. 
            </p>

            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-lg bg-electric-cyan/20 flex items-center justify-center shrink-0 mt-1">
                  <span class="text-electric-cyan text-lg">✦</span>
                </div>
                <div>
                  <h4 class="text-white font-semibold flex items-center gap-2">Education-Driven Pipeline</h4>
                  <p class="text-sm text-white/50 mt-1">Academic research seamlessly translated into practical technology.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-lg bg-deep-violet/20 flex items-center justify-center shrink-0 mt-1">
                  <span class="text-deep-violet text-lg">✦</span>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Ethical AI & Sustainable Systems</h4>
                  <p class="text-sm text-white/50 mt-1">Building solutions that respect human ecology and promote sustainability.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center shrink-0 mt-1">
                  <span class="text-neon-blue text-lg">✦</span>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Global Benefit Alignment</h4>
                  <p class="text-sm text-white/50 mt-1">Every innovation is weighed against its potential to advance peace and prosperity.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right Panel: Pipeline Diagram -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-tr from-electric-cyan/20 to-deep-violet/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div class="glass relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-space-black/50 backdrop-blur-xl">
              <h3 class="text-xl font-bold text-white mb-8 text-center uppercase tracking-widest">The Transformation Pipeline</h3>
              
              <div class="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-gradient-to-b before:from-electric-cyan before:to-deep-violet before:opacity-30">
                
                <!-- Stage 1 -->
                <div class="relative flex items-center gap-6 group/item">
                  <div class="w-12 h-12 rounded-full bg-space-black border-2 border-electric-cyan flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,245,212,0.3)] group-hover/item:scale-110 transition-transform">
                    <span class="text-electric-cyan font-bold">01</span>
                  </div>
                  <div class="flex-1 glass p-4 rounded-xl border border-white/5 hover:border-electric-cyan/30 transition-colors">
                    <h4 class="text-white font-semibold">Education & Theory</h4>
                  </div>
                </div>

                <!-- Stage 2 -->
                <div class="relative flex items-center gap-6 group/item">
                  <div class="w-12 h-12 rounded-full bg-space-black border-2 border-[#00d4ff] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,212,255,0.3)] group-hover/item:scale-110 transition-transform">
                    <span class="text-[#00d4ff] font-bold">02</span>
                  </div>
                  <div class="flex-1 glass p-4 rounded-xl border border-white/5 hover:border-[#00d4ff]/30 transition-colors">
                    <h4 class="text-white font-semibold">Interdisciplinary Research</h4>
                  </div>
                </div>

                <!-- Stage 3 -->
                <div class="relative flex items-center gap-6 group/item">
                  <div class="w-12 h-12 rounded-full bg-space-black border-2 border-deep-violet flex items-center justify-center z-10 shadow-[0_0_15px_rgba(86,11,173,0.3)] group-hover/item:scale-110 transition-transform">
                    <span class="text-deep-violet font-bold">03</span>
                  </div>
                  <div class="flex-1 glass p-4 rounded-xl border border-white/5 hover:border-deep-violet/30 transition-colors">
                    <h4 class="text-white font-semibold">Prototype & Testing</h4>
                  </div>
                </div>

                <!-- Stage 4 -->
                <div class="relative flex items-center gap-6 group/item">
                  <div class="w-12 h-12 rounded-full bg-space-black border-2 border-white/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover/item:scale-110 transition-transform">
                    <span class="text-white/80 font-bold">04</span>
                  </div>
                  <div class="flex-1 glass p-4 rounded-xl border border-white/5 hover:border-white/30 transition-colors">
                    <h4 class="text-white font-semibold">Societal Deployment</h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class InnovationPhilosophyComponent { }
