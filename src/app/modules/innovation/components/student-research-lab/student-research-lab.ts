import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InnovationProject {
    name: string;
    leadInnovator: string;
    category: string;
    summary: string;
    status: 'Prototype' | 'Deployed' | 'Patent Filed';
    image: string;
}

@Component({
    selector: 'app-student-research-lab',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 bg-space-black relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div class="max-w-2xl">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Student & Researcher <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-cyan">Innovation Lab</span>
            </h2>
            <p class="text-white/60 text-lg">
              Witness the tangible outcomes of our academic rigor. From capstone technologies to cross-border collaborative fellowships, these are the minds shaping the future.
            </p>
          </div>
          <button class="shrink-0 px-6 py-3 rounded-full border border-electric-cyan/30 text-electric-cyan hover:bg-electric-cyan hover:text-space-black transition-colors font-semibold tracking-wider uppercase text-sm">
            View All Projects
          </button>
        </div>

        <!-- Project Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-electric-cyan/50 transition-colors duration-500">
            <!-- Project Image Placeholder / Visual -->
            <div class="h-48 bg-midnight-blue relative overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-tr from-space-black/80 to-transparent z-10"></div>
               <!-- Placeholder for dramatic image. In a real scenario, use actual project imagery. -->
               <div class="absolute inset-0 bg-[url('/assets/images/project-placeholder.jpg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-50 mix-blend-luminosity"></div>
               
               <div class="absolute top-4 right-4 z-20">
                 <span [ngClass]="{
                   'bg-electric-cyan/20 text-electric-cyan border-electric-cyan/50': project.status === 'Deployed',
                   'bg-neon-blue/20 text-neon-blue border-neon-blue/50': project.status === 'Prototype',
                   'bg-deep-violet/20 text-white border-deep-violet/50': project.status === 'Patent Filed'
                 }" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border">
                   {{ project.status }}
                 </span>
               </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="text-xs font-bold text-electric-cyan tracking-widest uppercase mb-2">{{ project.category }}</div>
              <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{{ project.name }}</h3>
              <p class="text-sm text-white/40 mb-4 font-mono">Lead: <span class="text-white/80">{{ project.leadInnovator }}</span></p>
              
              <p class="text-white/60 text-sm leading-relaxed mb-6 line-clamp-3">
                {{ project.summary }}
              </p>

              <button class="text-xs font-bold text-white uppercase tracking-widest hover:text-electric-cyan transition-colors flex items-center gap-2">
                Explore Tech <span class="text-lg leading-none">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class StudentResearchLabComponent {
    projects: InnovationProject[] = [
        {
            name: 'Project AETHER',
            leadInnovator: 'Elena Rostova, Ph.D. Candidate',
            category: 'Climate Engineering',
            summary: 'A sub-orbital aerosol distribution matrix designed to temporarily deflect solar radiation via autonomous swarm drones.',
            status: 'Patent Filed',
            image: '...'
        },
        {
            name: 'Neuro-Synergy Exosuit',
            leadInnovator: 'Dr. James Chen & Fellow Group 7',
            category: 'Human-Machine Synergy',
            summary: 'A lightweight, carbon-nanotube woven suit that reads peripheral neural impulses to augment physical strength in zero-G environments.',
            status: 'Prototype',
            image: '...'
        },
        {
            name: 'Quantum-Secured Beacon',
            leadInnovator: 'Interplanetary Comms Capstone Team',
            category: 'Space Communication',
            summary: 'An operational deep-space relay utilizing entangled photons to ensure unhackable telemetry data transmission between Earth and orbital stations.',
            status: 'Deployed',
            image: '...'
        }
    ];
}
