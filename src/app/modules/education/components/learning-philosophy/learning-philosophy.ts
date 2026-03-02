import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-learning-philosophy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-20 items-center">
        <div class="space-y-12 animate-fade-in-left">
          <div class="space-y-6">
            <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Our Learning <span class="text-gradient">Philosophy</span></h2>
            <div class="w-20 h-1 bg-gradient-to-r from-accent-cyan to-deep-violet rounded-full"></div>
            <p class="text-xl text-white/80 leading-relaxed font-medium">
              We transcend traditional boundaries to foster a generation of space-conscious innovators.
            </p>
          </div>

          <div class="space-y-8">
            <div class="p-6 glass rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 class="text-lg font-bold text-white mb-2 underline decoration-accent-cyan/50 underline-offset-8">Research-Integrated Model</h3>
              <p class="text-white/50 text-sm leading-relaxed">Students work alongside world-class researchers on real-time cosmic challenges, bridging the gap between theory and discovery.</p>
            </div>
            
            <div class="p-6 glass rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 class="text-lg font-bold text-white mb-2 underline decoration-deep-violet/50 underline-offset-8">Ethical & Scientific Pedagogy</h3>
              <p class="text-white/50 text-sm leading-relaxed">Prioritizing the ethics of exploration and the responsibility of humanity as a multi-planetary species.</p>
            </div>

            <div class="p-6 glass rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 class="text-lg font-bold text-white mb-2 underline decoration-white/30 underline-offset-8">Applied Space Sciences</h3>
              <p class="text-white/50 text-sm leading-relaxed">Hands-on technical training using satellite data, orbital simulations, and advanced computational systems.</p>
            </div>
          </div>
        </div>

        <div class="relative animate-fade-in-right">
          <div class="absolute -inset-10 bg-gradient-to-br from-accent-cyan/10 via-deep-violet/10 to-transparent blur-3xl opacity-50"></div>
          <div class="glass p-12 rounded-[4rem] border border-white/10 overflow-hidden text-center relative">
            <!-- Simplified Infographic Stub -->
            <div class="space-y-12 relative z-10">
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full glass border border-accent-cyan flex items-center justify-center text-accent-cyan font-bold mb-4 group-hover:bg-accent-cyan group-hover:text-space-black transition-all">01</div>
                <div class="text-white font-bold tracking-widest uppercase text-xs">Education</div>
              </div>
              <div class="w-0.5 h-8 bg-white/10 mx-auto"></div>
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full glass border border-deep-violet flex items-center justify-center text-deep-violet font-bold mb-4 group-hover:bg-deep-violet group-hover:text-white transition-all">02</div>
                <div class="text-white font-bold tracking-widest uppercase text-xs">Research</div>
              </div>
              <div class="w-0.5 h-8 bg-white/10 mx-auto"></div>
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full glass border border-white flex items-center justify-center text-white font-bold mb-4 group-hover:bg-white group-hover:text-space-black transition-all">03</div>
                <div class="text-white font-bold tracking-widest uppercase text-xs">Innovation</div>
              </div>
              <div class="w-0.5 h-8 bg-white/10 mx-auto"></div>
              <div class="flex flex-col items-center group">
                <div class="w-16 h-16 rounded-full glass border border-accent-cyan flex items-center justify-center text-accent-cyan font-bold mb-4 group-hover:bg-accent-cyan group-hover:text-space-black transition-all animate-bounce">04</div>
                <div class="text-white font-bold tracking-widest uppercase text-xs">Impact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class LearningPhilosophyComponent { }
