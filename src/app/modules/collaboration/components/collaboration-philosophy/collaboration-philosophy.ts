import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-collaboration-philosophy',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative overflow-hidden">
      <!-- Decorator lines -->
      <div class="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#00B4D8]/20 to-transparent"></div>
      <div class="absolute inset-y-0 left-12 w-[1px] bg-gradient-to-b from-transparent via-[#1B3A4B]/50 to-transparent hidden lg:block"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <!-- Left Panel: Core Messaging -->
          <div class="space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
              Knowledge Beyond <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#1B3A4B]">Borders.</span>
            </h2>
            
            <p class="text-lg text-white/70 font-light leading-relaxed">
              We believe that the challenges of space exploration and earthly sustainability are too immense for any single entity. By democratizing access to education and pooling institutional intelligence, we multiply our capacity for global impact.
            </p>

            <ul class="space-y-6 pt-6">
              <li class="flex items-start gap-4 group">
                <div class="w-10 h-10 rounded-full bg-[#1B3A4B]/50 border border-[#00B4D8]/30 flex items-center justify-center shrink-0 group-hover:bg-[#00B4D8]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-bold tracking-wide mb-1">Education as a Global Equalizer</h4>
                  <p class="text-sm text-white/50 leading-relaxed">Providing high-tier aerospace education to developing nations and underserved communities.</p>
                </div>
              </li>

              <li class="flex items-start gap-4 group">
                <div class="w-10 h-10 rounded-full bg-[#1B3A4B]/50 border border-[#F4A261]/30 flex items-center justify-center shrink-0 group-hover:bg-[#F4A261]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.631.285a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.285-.631a6 6 0 00.517-3.86l-.477-2.388a2 2 0 01.547-1.022l1.16-1.16a2 2 0 012.828 2.828l-1.16 1.16z" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-bold tracking-wide mb-1">Cross-Border Research Cooperation</h4>
                  <p class="text-sm text-white/50 leading-relaxed">Fostering shared intellectual property frameworks to solve universal challenges faster.</p>
                </div>
              </li>

              <li class="flex items-start gap-4 group">
                <div class="w-10 h-10 rounded-full bg-[#1B3A4B]/50 border border-white/30 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-bold tracking-wide mb-1">Ethical Technology Development</h4>
                  <p class="text-sm text-white/50 leading-relaxed">Ensuring space innovations adhere to planetary protection protocols and benefit all of humanity.</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Right Panel: Visual Model -->
          <div class="relative">
            <!-- Background Glow -->
            <div class="absolute inset-0 bg-[#00B4D8]/5 rounded-[3rem] blur-2xl"></div>
            
            <div class="glass relative p-8 md:p-12 rounded-[3rem] border border-white/10 bg-[#1B3A4B]/20 backdrop-blur-xl">
              
              <div class="flex flex-col items-center gap-8 relative z-10">
                <!-- Node 1 -->
                <div class="w-full bg-[#0B0F19]/80 border border-[#00B4D8]/30 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-[#00B4D8] relative group">
                  <div class="w-12 h-12 mx-auto bg-[#00B4D8]/20 rounded-full flex items-center justify-center mb-3">
                    <span class="text-xl">📚</span>
                  </div>
                  <h3 class="text-lg font-bold text-white mb-1">Global Education</h3>
                  <p class="text-xs text-white/50">Unified academic standards</p>
                  
                  <!-- Connection Line -->
                  <div class="absolute -bottom-8 left-1/2 w-[2px] h-8 bg-gradient-to-b from-[#00B4D8] to-transparent"></div>
                </div>

                <!-- Node 2 -->
                <div class="w-full bg-[#0B0F19]/80 border border-[#1B3A4B] rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-white/50 relative">
                  <div class="w-12 h-12 mx-auto bg-[#1B3A4B]/50 rounded-full flex items-center justify-center mb-3">
                    <span class="text-xl">🔬</span>
                  </div>
                  <h3 class="text-lg font-bold text-white mb-1">Shared Research</h3>
                  <p class="text-xs text-white/50">Cross-institutional labs</p>

                  <!-- Connection Line -->
                  <div class="absolute -bottom-8 left-1/2 w-[2px] h-8 bg-gradient-to-b from-white/30 to-transparent"></div>
                </div>

                <!-- Node 3 -->
                <div class="w-full bg-[#0B0F19]/80 border border-[#F4A261]/30 rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-[#F4A261] relative">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#F4A261]/5 to-transparent rounded-2xl"></div>
                  <div class="w-12 h-12 mx-auto bg-[#F4A261]/20 rounded-full flex items-center justify-center mb-3">
                    <span class="text-xl">🌍</span>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-1">Human Impact</h3>
                  <p class="text-xs text-[#F4A261] font-bold tracking-widest uppercase mt-2">The Multiplier Effect</p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CollaborationPhilosophyComponent { }
