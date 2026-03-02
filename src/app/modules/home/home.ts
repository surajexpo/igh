import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [CommonModule],
   template: `
    <div class="relative overflow-hidden">
      <!-- Research Modal -->
      @if (activeDomain()) {
        <div class="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
           <div class="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in" (click)="activeDomain.set(null)"></div>
           <div class="relative glass max-w-2xl w-full p-8 rounded-[2rem] border-white/10 animate-fade-in-up">
              <button (click)="activeDomain.set(null)" class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              
              <div class="space-y-6">
                 <div class="w-20 h-20 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                 </div>
                 <h2 class="text-4xl font-bold text-white">{{ activeDomain()?.title }}</h2>
                 <p class="text-white/60 leading-relaxed text-lg">
                    {{ activeDomain()?.fullDesc }}
                 </p>
                 <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <h4 class="text-xs font-bold text-neon-blue uppercase tracking-widest mb-4">Key Objectives</h4>
                    <ul class="space-y-2">
                       @for (obj of activeDomain()?.objectives; track obj) {
                          <li class="text-sm text-white/80 flex items-center gap-2">
                             <span class="w-1.5 h-1.5 rounded-full bg-neon-blue"></span>
                             {{ obj }}
                          </li>
                       }
                    </ul>
                 </div>
                 <button class="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue to-cosmic-purple text-white font-bold hover:scale-[1.02] transition-transform">Download Technical Brochure</button>
              </div>
           </div>
        </div>
      }

      <!-- Hero Section (AI Rendered Video Background) -->
      <section class="relative min-h-[90vh] md:min-h-screen flex text-center items-center justify-center px-6 overflow-hidden bg-black py-20">
        <!-- Background Elements -->
        <div class="absolute inset-0 z-0 overflow-hidden">
          
          <!-- GENERATED CINEMATIC VIDEO -->
          <video 
             class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
             autoplay loop muted playsinline [muted]="true" [volume]="0">
             <source src="asset/video/home-video.mp4" type="video/mp4" />
          </video>

          <!-- Cinematic Overlays for text readability -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none"></div>
          <div class="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] pointer-events-none"></div>
          
          <!-- Subtle corner glowing orbs to enhance the video colors -->
          <div class="absolute top-0 -left-20 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen"></div>
          <div class="absolute bottom-0 -right-20 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-[120px] animate-pulse pointer-events-none mix-blend-screen"></div>
        </div>

        <div class="relative z-20 max-w-6xl mx-auto space-y-8 mt-12 animate-fade-in-up text-center w-full">
          <!-- Corporate / Global Badge -->
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 mb-2 backdrop-blur-xl group cursor-default">
             <span class="w-2.5 h-2.5 rounded-full bg-neon-blue animate-pulse shadow-[0_0_12px_#00d4ff]"></span>
             <span class="text-xs font-bold tracking-[0.2em] uppercase text-white/90 group-hover:text-neon-blue transition-colors">Global Unity & Technology</span>
          </div>
          
          <!-- Master Tagline Typography -->
          <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white leading-[1.05] drop-shadow-2xl">
            Collaborating Beyond Borders.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-cosmic-purple">Educating Beyond Limits.</span>
          </h1>
          
          <!-- Subtitle -->
          <p class="text-lg md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg tracking-wide z-20 relative">
            Advancing Humanity Through Space Education & Research
          </p>
          
          <!-- Actions -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 relative z-20">
            <button class="px-10 py-4 rounded-full bg-white text-black font-black text-lg tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] hover:scale-[1.02] active:scale-95 transition-all w-full sm:w-auto">
              Our Mission
            </button>
            <button class="px-10 py-4 rounded-full glass text-white font-bold text-lg tracking-widest uppercase border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all w-full sm:w-auto backdrop-blur-md">
              Join Ecosystem
            </button>
          </div>
        </div>
      </section>

      <!-- About Organization Section -->
      <section class="py-24 px-6 relative bg-deep-void overflow-hidden">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="space-y-6">
            <h2 class="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase">Our Purpose</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              A Global Vision for <br/> 
              <span class="text-gradient">Scientific Excellence</span>
            </h3>
            <p class="text-white/60 text-lg leading-relaxed">
              Founded on the principles of ethical technology and global responsibility, IGH Space is dedicated to bridging the gap between advanced research and human welfare. We believe that space is the ultimate frontier for orchestrating harmony on Earth.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               <div class="glass p-4 rounded-xl space-y-2 hover:border-neon-blue/30 transition-colors">
                  <div class="text-white font-bold">Scientific Framework</div>
                  <p class="text-xs text-white/40">Rigorous peer-reviewed methodology for space-based applications.</p>
               </div>
               <div class="glass p-4 rounded-xl space-y-2 hover:border-cosmic-purple/30 transition-colors">
                  <div class="text-white font-bold">Ethical Leadership</div>
                  <p class="text-xs text-white/40">Ensuring technology serves humanity without compromise.</p>
               </div>
            </div>
            <button class="flex items-center gap-2 text-neon-blue font-bold group">
               Learn More Our Mission 
               <svg class="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
          
          <div class="relative group">
             <div class="absolute -inset-4 bg-gradient-to-r from-neon-blue to-cosmic-purple opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
             <div class="relative glass rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden">
                <div class="text-center space-y-4 animate-pulse">
                   <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-white/10 to-white/5 flex items-center justify-center">
                      <svg class="w-16 h-16 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                   </div>
                   <div class="text-white/70 font-mono text-sm">SYSTEM STATUS: HARMONIZING...</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <!-- Research Domains Section -->
      <section class="py-24 px-6 relative bg-black">
        <div class="max-w-7xl mx-auto space-y-16">
          <div class="text-center space-y-4">
            <h2 class="text-xs font-bold tracking-[0.2em] text-cosmic-purple uppercase">Areas of Excellence</h2>
            <h3 class="text-4xl md:text-5xl font-bold text-white">Research Domains</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @for (domain of researchDomains; track domain.title) {
              <div (click)="activeDomain.set(domain)" class="glass p-8 rounded-3xl space-y-6 group hover:translate-y-[-10px] transition-all duration-300 border-white/5 hover:border-neon-blue/20 cursor-pointer">
                <div class="w-16 h-16 rounded-2xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-all">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h4 class="text-2xl font-bold text-white uppercase tracking-tighter italic">{{ domain.title }}</h4>
                <p class="text-white/50 leading-relaxed text-sm">{{ domain.shortDesc }}</p>
                <button class="text-sm font-bold text-white/70 hover:text-white flex items-center gap-2 group-hover:gap-4 transition-all">
                  Details <span class="text-neon-blue font-black">↗</span>
                </button>
              </div>
            }
          </div>
        </div>
      </section>
      <!-- Education Programs Section -->
      <section class="py-24 px-6 relative bg-deep-void">
        <div class="max-w-7xl mx-auto space-y-12">
          <div class="flex flex-col md:flex-row justify-between items-end gap-8">
            <div class="space-y-4">
              <h2 class="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase">Learning Pathways</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-white">Education Programs</h3>
            </div>
            <div class="flex gap-4 pb-2">
               <button class="px-6 py-2 rounded-full glass border-neon-blue/40 text-neon-blue text-sm font-bold">All Programs</button>
               <button class="px-6 py-2 rounded-full glass text-white/50 hover:text-white text-sm font-bold transition-colors">Certifications</button>
               <button class="px-6 py-2 rounded-full glass text-white/50 hover:text-white text-sm font-bold transition-colors">Fellowships</button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Program 1 -->
            <div class="glass flex flex-col md:flex-row gap-6 p-6 rounded-3xl group hover:border-white/20 transition-all">
               <div class="w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-cosmic-purple/20 flex items-center justify-center relative overflow-hidden">
                  <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0V6"/></svg>
               </div>
               <div class="flex-grow space-y-4 py-2">
                  <div class="flex justify-between items-start">
                     <span class="text-[10px] font-bold tracking-widest uppercase text-neon-blue px-2 py-1 bg-neon-blue/10 rounded">Online Certification</span>
                     <span class="text-white/30 text-xs">6 Months</span>
                  </div>
                  <h4 class="text-xl font-bold text-white uppercase tracking-tight">Space Systems Engineering</h4>
                  <p class="text-white/40 text-sm italic">Master the complexities of modern satellite architecture and orbital mechanics.</p>
                  <div class="pt-2">
                     <button class="w-full py-3 rounded-xl glass border-white/5 hover:border-neon-blue/50 text-white font-bold text-sm transition-all group-hover:bg-white/5">Apply Now</button>
                  </div>
               </div>
            </div>

            <!-- Program 2 -->
            <div class="glass flex flex-col md:flex-row gap-6 p-6 rounded-3xl group hover:border-white/20 transition-all">
               <div class="w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br from-cosmic-purple/20 to-neon-blue/20 flex items-center justify-center relative overflow-hidden">
                  <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
               </div>
               <div class="flex-grow space-y-4 py-2">
                  <div class="flex justify-between items-start">
                     <span class="text-[10px] font-bold tracking-widest uppercase text-cosmic-purple px-2 py-1 bg-cosmic-purple/10 rounded">Research Fellowship</span>
                     <span class="text-white/30 text-xs">12 Months</span>
                  </div>
                  <h4 class="text-xl font-bold text-white uppercase tracking-tight">AI & Human Consciousness</h4>
                  <p class="text-white/40 text-sm italic">Investigating the intersection of computational neuro-science and deep space travel.</p>
                  <div class="pt-2">
                     <button class="w-full py-3 rounded-xl glass border-white/5 hover:border-cosmic-purple/50 text-white font-bold text-sm transition-all group-hover:bg-white/5">Apply Now</button>
                  </div>
               </div>
            </div>
          </div>
          
          <div class="text-center">
             <button class="px-8 py-3 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all">Download Full Program Brochure (PDF)</button>
          </div>
        </div>
      </section>

      <!-- Innovation & Impact Section -->
      <section class="py-24 px-6 bg-black relative border-y border-white/5">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
           <div class="col-span-1 md:col-span-1 space-y-6">
              <h2 class="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase">Global Reach</h2>
              <h3 class="text-4xl font-bold text-white">Innovation & <br/> <span class="text-gradient">Social Impact</span></h3>
              <p class="text-white/40 text-sm leading-relaxed">
                We measure our success not just by scientific breakthroughs, but by the tangible improvement in human lives across the globe. Our alignment with UN SDGs ensures ethical growth.
              </p>
              <div class="flex gap-4">
                 <div class="h-12 w-12 glass rounded-lg flex items-center justify-center font-bold text-neon-blue">SDG 4</div>
                 <div class="h-12 w-12 glass rounded-lg flex items-center justify-center font-bold text-cosmic-purple">SDG 9</div>
                 <div class="h-12 w-12 glass rounded-lg flex items-center justify-center font-bold text-white">SDG 17</div>
              </div>
           </div>

           <div class="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="glass p-8 rounded-3xl space-y-4">
                 <div class="text-4xl font-black text-white">$1.2B</div>
                 <h4 class="text-sm font-bold text-neon-blue uppercase tracking-widest">Research Grants</h4>
                 <p class="text-xs text-white/30 italic">Allocated to sustainable planetary systems research in the last decade.</p>
              </div>
              <div class="glass p-8 rounded-3xl space-y-4 border-l-4 border-l-cosmic-purple">
                 <div class="text-4xl font-black text-white">142</div>
                 <h4 class="text-sm font-bold text-cosmic-purple uppercase tracking-widest">Global Partners</h4>
                 <p class="text-xs text-white/30 italic">Active collaboration with leading space agencies and universities.</p>
              </div>
              <div class="glass p-8 rounded-3xl space-y-4 border-l-4 border-l-neon-blue">
                 <div class="text-4xl font-black text-white">94%</div>
                 <h4 class="text-sm font-bold text-neon-blue uppercase tracking-widest">Employment Rate</h4>
                 <p class="text-xs text-white/30 italic">Our alumni lead innovations in aerospace and AI globally.</p>
              </div>
              <div class="glass p-8 rounded-3xl space-y-4">
                 <div class="text-4xl font-black text-white">100+</div>
                 <h4 class="text-sm font-bold text-white uppercase tracking-widest">Patents Pending</h4>
                 <p class="text-xs text-white/30 italic">Breakthrough technologies in bio-regenerative life support.</p>
              </div>
           </div>
        </div>
      </section>
      <!-- Global Collaboration Section -->
      <section class="py-24 px-6 relative bg-deep-void overflow-hidden">
        <div class="max-w-7xl mx-auto space-y-16">
           <div class="text-center space-y-4">
              <h2 class="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase">Partner Ecosystem</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-white">Global Collaboration</h3>
           </div>

           <div class="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div class="flex items-center justify-center p-8 glass rounded-2xl">
                 <span class="text-white font-black text-xl tracking-tighter italic">SPACE-X_MOD</span>
              </div>
              <div class="flex items-center justify-center p-8 glass rounded-2xl">
                 <span class="text-white font-black text-xl tracking-tighter italic">NASA_LAB</span>
              </div>
              <div class="flex items-center justify-center p-8 glass rounded-2xl">
                 <span class="text-white font-black text-xl tracking-tighter italic">ESA_RES</span>
              </div>
              <div class="flex items-center justify-center p-8 glass rounded-2xl">
                 <span class="text-white font-black text-xl tracking-tighter italic">ISRO_NET</span>
              </div>
           </div>

           <div class="glass p-12 rounded-[3rem] bg-gradient-to-br from-neon-blue/5 to-cosmic-purple/5 border-white/5 relative overflow-hidden">
              <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div class="space-y-6">
                    <h4 class="text-3xl font-bold text-white">Join as a Research Partner</h4>
                    <p class="text-white/50 leading-relaxed italic">
                      "Collective intelligence is the key to unlocking the mysteries of the universe. We invite institutions and industries to collaborate on zero-gravity innovation."
                    </p>
                    <div class="space-y-4 pt-4">
                       <div class="flex items-center gap-4 text-white/70">
                          <div class="w-2 h-2 rounded-full bg-neon-blue"></div>
                          <span>Joint Laboratory Development</span>
                       </div>
                       <div class="flex items-center gap-4 text-white/70">
                          <div class="w-2 h-2 rounded-full bg-cosmic-purple"></div>
                          <span>Cross-Institutional Fellowships</span>
                       </div>
                    </div>
                 </div>
                 <div class="glass p-8 rounded-3xl border-white/10 space-y-4">
                    <input type="text" placeholder="Institution Name" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-blue outline-none transition-all" />
                    <input type="email" placeholder="Official Email" class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-blue outline-none transition-all" />
                    <select class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:border-neon-blue outline-none transition-all">
                       <option>Select Partnership Type</option>
                       <option>Academic</option>
                       <option>Industrial</option>
                       <option>Government</option>
                    </select>
                    <button class="w-full py-4 rounded-xl bg-neon-blue text-black font-black uppercase tracking-widest hover:bg-white transition-all">Send Inquiry</button>
                 </div>
              </div>
              <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
           </div>
        </div>
      </section>

      <!-- Technology Stack Section (Animated) -->
      <section class="py-24 px-6 bg-black">
        <div class="max-w-7xl mx-auto space-y-16">
           <div class="text-center space-y-4">
              <h2 class="text-xs font-bold tracking-[0.2em] text-cosmic-purple uppercase">Our Engine</h2>
              <h3 class="text-4xl md:text-5xl font-bold text-white">Technological Superiority</h3>
           </div>

           <div class="flex flex-wrap justify-center gap-6">
              <div class="px-8 py-4 rounded-2xl glass border-white/5 hover:border-neon-blue/40 hover:scale-110 transition-all cursor-default group">
                 <span class="text-white/40 group-hover:text-neon-blue font-mono font-bold tracking-widest">QUANTUM COMPUTING</span>
              </div>
              <div class="px-8 py-4 rounded-2xl glass border-white/5 hover:border-cosmic-purple/40 hover:scale-110 transition-all cursor-default group">
                 <span class="text-white/40 group-hover:text-cosmic-purple font-mono font-bold tracking-widest">SPACE ROBOTICS</span>
              </div>
              <div class="px-8 py-4 rounded-2xl glass border-white/5 hover:border-white/40 hover:scale-110 transition-all cursor-default group">
                 <span class="text-white/40 group-hover:text-white font-mono font-bold tracking-widest">NEURAL SATELLITES</span>
              </div>
              <div class="px-8 py-4 rounded-2xl glass border-white/5 hover:border-neon-blue/40 hover:scale-110 transition-all cursor-default group">
                 <span class="text-white/40 group-hover:text-neon-blue font-mono font-bold tracking-widest">BIO-REGEN SYSTEMS</span>
              </div>
              <div class="px-8 py-4 rounded-2xl glass border-white/5 hover:border-cosmic-purple/40 hover:scale-110 transition-all cursor-default group">
                 <span class="text-white/40 group-hover:text-cosmic-purple font-mono font-bold tracking-widest">BLOCKCHAIN LOGISTICS</span>
              </div>
           </div>
        </div>
      </section>

      <!-- News & Publications -->
      <section class="py-24 px-6 bg-deep-void">
        <div class="max-w-7xl mx-auto space-y-16">
           <div class="flex justify-between items-end">
              <div class="space-y-4">
                 <h2 class="text-xs font-bold tracking-[0.2em] text-neon-blue uppercase">Intelligence Stream</h2>
                 <h3 class="text-4xl font-bold text-white">Latest Briefings</h3>
              </div>
              <button class="text-white/50 hover:text-white font-bold transition-colors">View All Publications →</button>
           </div>

           <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="space-y-6 group cursor-pointer">
                 <div class="aspect-video rounded-3xl overflow-hidden glass border-white/5 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-4 left-4">
                       <span class="text-[10px] font-bold tracking-widest text-neon-blue uppercase bg-neon-blue/10 px-2 py-1 rounded">Research</span>
                    </div>
                 </div>
                 <div class="space-y-2">
                    <div class="text-white/30 text-xs font-mono">MARCH 12, 2026</div>
                    <h4 class="text-xl font-bold text-white group-hover:text-neon-blue transition-colors uppercase italic tracking-tight">Zero-Gravity Neural Net Performance Audit</h4>
                    <p class="text-white/40 text-sm line-clamp-2">Exploring the latency improvements in deep learning models when executed in low-orbit server clusters.</p>
                 </div>
              </div>

              <div class="space-y-6 group cursor-pointer">
                 <div class="aspect-video rounded-3xl overflow-hidden glass border-white/5 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-4 left-4">
                       <span class="text-[10px] font-bold tracking-widest text-cosmic-purple uppercase bg-cosmic-purple/10 px-2 py-1 rounded">Event</span>
                    </div>
                 </div>
                 <div class="space-y-2">
                    <div class="text-white/30 text-xs font-mono">MARCH 08, 2026</div>
                    <h4 class="text-xl font-bold text-white group-hover:text-cosmic-purple transition-colors uppercase italic tracking-tight">Global Harmony Summit 2026</h4>
                    <p class="text-white/40 text-sm line-clamp-2">A gathering of ethical technology leaders to discuss the next phase of space-based renewable energy.</p>
                 </div>
              </div>

              <div class="space-y-6 group cursor-pointer">
                 <div class="aspect-video rounded-3xl overflow-hidden glass border-white/5 relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div class="absolute bottom-4 left-4">
                       <span class="text-[10px] font-bold tracking-widest text-white uppercase bg-white/10 px-2 py-1 rounded">Whitepaper</span>
                    </div>
                 </div>
                 <div class="space-y-2">
                    <div class="text-white/30 text-xs font-mono">FEBRUARY 28, 2026</div>
                    <h4 class="text-xl font-bold text-white group-hover:text-white/70 transition-colors uppercase italic tracking-tight">The Bio-Regenerative Life Support Protocol</h4>
                    <p class="text-white/40 text-sm line-clamp-2">Standardizing the requirements for long-term human habitation in modular space stations.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Contact & Engagement -->
      <section class="py-24 px-6 bg-black relative">
        <div class="max-w-4xl mx-auto glass p-12 rounded-[3rem] border-white/5 space-y-12">
           <div class="text-center space-y-4">
              <h2 class="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">Stay Connected</h2>
              <p class="text-white/40 text-sm">Subscribe to the IGH Intelligence Stream for weekly briefings.</p>
           </div>

           <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input type="email" placeholder="Enter your email" class="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-blue outline-none transition-all" />
              <button class="px-10 py-4 rounded-2xl bg-gradient-to-r from-neon-blue to-cosmic-purple text-white font-black uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">Subscribe</button>
           </div>

           <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5 text-center md:text-left">
              <div class="space-y-2">
                 <div class="text-neon-blue font-bold text-xs uppercase tracking-widest">Office</div>
                 <div class="text-white/70 text-sm leading-relaxed">
                    1201 Orbital Plaza, <br/>
                    Innovation District, SG 5432
                 </div>
              </div>
              <div class="space-y-2">
                 <div class="text-cosmic-purple font-bold text-xs uppercase tracking-widest">Contact</div>
                 <div class="text-white/70 text-sm">
                    mission&#64;igh-space.org <br/>
                    +1 (800) SPACE-IGH
                 </div>
              </div>
              <div class="space-y-2">
                 <div class="text-white font-bold text-xs uppercase tracking-widest">Social</div>
                 <div class="flex justify-center md:justify-start gap-4 pt-2">
                    <span class="text-white/30 hover:text-white cursor-pointer transition-colors font-mono text-xs">X_TW</span>
                    <span class="text-white/30 hover:text-white cursor-pointer transition-colors font-mono text-xs">LI_NW</span>
                    <span class="text-white/30 hover:text-white cursor-pointer transition-colors font-mono text-xs">GH_OS</span>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  `,
   styles: [`
    :host { display: block; }
    .star {
      position: absolute;
      background: white;
      border-radius: 50%;
    }
    .star-1 { top: 10%; left: 20%; width: 2px; height: 2px; }
    .star-2 { top: 30%; left: 70%; width: 1px; height: 1px; }
    .star-3 { top: 60%; left: 40%; width: 3px; height: 3px; opacity: 0.5; }
  `]
})
export class HomeComponent {
   activeDomain = signal<any>(null);

   researchDomains = [
      {
         title: 'Space Exploration',
         shortDesc: 'Advanced propulsion systems and modular base habitats for deep space missions.',
         fullDesc: 'Our research in Space Exploration focuses on the development of next-generation fusion propulsion and terraforming technologies. We aim to establish sustainable human habitats on Mars and beyond by 2035.',
         objectives: [
            'Propulsion Lab (N-Series Fusion)',
            'Modular Habitat Architectures',
            'Deep Space Communication Relays'
         ]
      },
      {
         title: 'AI for Space',
         shortDesc: 'Autonomous orchestration of global communications via neural satellite networks.',
         fullDesc: 'Leveraging quantum-ready neural networks to manage constellation-wide traffic and autonomous debris avoidance systems. Our AI ensures 99.999% uptime for global harmony communications.',
         objectives: [
            'Neural Constellation Management',
            'Autonomous Debris Avoidance',
            'Quantum Data Encryption'
         ]
      },
      {
         title: 'Planetary Systems',
         shortDesc: 'Sustainable habitat modeling and bio-regenerative life support systems for Earth 2.0.',
         fullDesc: 'Studying the delicate balance of planetary ecosystems to create closed-loop life support systems that can operate indefinitely without Earth-based supplies.',
         objectives: [
            'Bio-regenerative Life Support',
            'Atmospheric Recycling Protocols',
            'Subterranean Farming Tech'
         ]
      }
   ];
}
