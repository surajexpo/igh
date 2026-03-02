import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-faculty-mentorship',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Faculty & <span class="text-gradient">Mentorship</span></h2>
        <p class="text-white/50 text-lg">Guided by world-class leaders in space science and innovation.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        @for (member of faculty; track member.name) {
          <div class="glass p-1 rounded-3xl border border-white/5 group hover:border-accent-cyan/20 transition-all duration-500 overflow-hidden">
            <div class="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
              <div class="absolute inset-0 bg-gradient-to-t from-space-black via-transparent to-transparent z-10 opacity-60"></div>
              <div class="absolute inset-0 bg-white/5 animate-pulse"></div>
              <!-- In a real app, use img tag with generate_image output -->
              <div class="absolute inset-0 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 text-white/5 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
              </div>
              <div class="absolute bottom-6 left-6 z-20">
                <h3 class="text-xl font-bold text-white tracking-tight">{{ member.name }}</h3>
                <p class="text-xs font-bold tracking-widest text-accent-cyan uppercase">{{ member.role }}</p>
              </div>
            </div>
            
            <div class="px-6 pb-8 space-y-4">
              <p class="text-xs text-white/40 leading-relaxed italic">Research: {{ member.researchArea }}</p>
              
              <div class="flex items-center justify-between pt-4 border-t border-white/5">
                <span class="text-[10px] font-black tracking-widest uppercase text-white/20">{{ member.publications }} Publications</span>
                <button class="text-xs font-bold text-white/80 hover:text-accent-cyan transition-colors flex items-center gap-1 group/btn">
                  View Profile
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class FacultyMentorshipComponent {
    faculty = [
        { name: 'Dr. Aris Thorne', role: 'Head of Astro-Systems', researchArea: 'Propulsion & Deep Space Habitation', publications: 142 },
        { name: 'Prof. Kaelen Voss', role: 'Chief Cyberneticist', researchArea: 'Neural interfaces for long-term space flight', publications: 98 },
        { name: 'Dr. Lyra Solis', role: 'Director of Bio-Cosmos', researchArea: 'Extremophilic resilience in Martian soil', publications: 115 },
        { name: 'Major Jaxen Krell', role: 'Strategic Operations', researchArea: 'Orbital logistics and global coordination', publications: 64 }
    ];
}
