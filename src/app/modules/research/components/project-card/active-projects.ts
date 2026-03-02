import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
    id: string;
    name: string;
    lead: string;
    status: 'Ongoing' | 'Completed' | 'Funded';
    domain: string;
    impact: string;
}

@Component({
    selector: 'app-active-projects',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="space-y-4 text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Active <span class="text-gradient">Projects</span></h2>
          <p class="text-white/50 max-w-xl text-lg">Real-time transparency into our current scientific endeavors.</p>
        </div>

        <!-- Filtering (Simplified UI) -->
        <div class="flex gap-4 p-1.5 glass rounded-2xl border border-white/5">
          @for (filter of filters; track filter) {
            <button (click)="activeFilter = filter"
                    [class]="activeFilter === filter ? 'bg-white text-space-black' : 'text-white/60 hover:text-white'"
                    class="px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300">
              {{ filter }}
            </button>
          }
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of filteredProjects; track project.id) {
          <div class="glass p-8 rounded-3xl border border-white/10 flex flex-col hover:border-white/20 transition-all duration-300">
            <div class="flex justify-between items-start mb-6">
              <span class="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 text-white/40">
                {{ project.domain }}
              </span>
              <span [class]="getStatusClass(project.status)" class="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                {{ project.status }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-2 leading-tight tracking-tight">{{ project.name }}</h3>
            <p class="text-sm text-white/50 mb-6">Lead: <span class="text-white/80 font-medium">{{ project.lead }}</span></p>
            
            <div class="mt-auto pt-6 border-t border-white/5 space-y-6">
              <p class="text-sm text-white/60 leading-relaxed font-light italic">
                "{{ project.impact }}"
              </p>
              
              <button class="w-full py-3 rounded-xl glass border border-white/10 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-space-black transition-all">
                Download Whitepaper
              </button>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class ActiveProjectsComponent {
    filters = ['All', 'Ongoing', 'Completed', 'Funded'];
    activeFilter = 'All';

    projects: Project[] = [
        {
            id: '1',
            name: 'Neuro-Orbital Interface v2',
            lead: 'Dr. Sarah Chen',
            status: 'Ongoing',
            domain: 'AI / Consciousness',
            impact: 'Syncing human circadian rhythms with lunar cycles for long-term health in space.'
        },
        {
            id: '2',
            name: 'Project Helios-X',
            lead: 'Prof. Marcus Vane',
            status: 'Funded',
            domain: 'Renewable Energy',
            impact: 'Microwave power transmission from low-earth orbit directly to disaster zones.'
        },
        {
            id: '3',
            name: 'Lunar Biosphere Alpha',
            lead: 'Dr. Elena Rossi',
            status: 'Completed',
            domain: 'Sustainable Systems',
            impact: 'Successfully sustained 30 closed-loop cycles of wheat and potatoes in sim-lunar soil.'
        }
    ];

    get filteredProjects() {
        return this.activeFilter === 'All'
            ? this.projects
            : this.projects.filter(p => p.status === this.activeFilter);
    }

    getStatusClass(status: string) {
        switch (status) {
            case 'Ongoing': return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
            case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
            case 'Funded': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
            default: return 'bg-white/10 text-white';
        }
    }
}
