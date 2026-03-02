import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainCardComponent, ResearchDomain } from '../domain-card/domain-card';

@Component({
    selector: 'app-core-domains',
    standalone: true,
    imports: [CommonModule, DomainCardComponent],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Core Research <span class="text-gradient">Domains</span></h2>
        <p class="text-white/50 max-w-2xl mx-auto text-lg">Exploring the frontiers of science to solve the world's most complex challenges.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (domain of domains; track domain.id) {
          <app-domain-card [domain]="domain" class="h-full" />
        }
      </div>
    </section>
  `
})
export class CoreDomainsComponent {
    domains: ResearchDomain[] = [
        {
            id: '1',
            title: 'Space Exploration Tech',
            description: 'Engineering the next generation of propulsion systems and deep-space habitats for long-term survival.',
            slug: 'exploration-tech',
            color: '#00d4ff',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#00d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>'
        },
        {
            id: '2',
            title: 'AI for Space',
            description: 'Developing autonomous navigation and decision-making systems for deep-space robotic missions.',
            slug: 'space-ai',
            color: '#7b2ff7',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#7b2ff7]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
        },
        {
            id: '3',
            title: 'Quantum Computing',
            description: 'Leveraging quantum supremacy for complex orbital simulations and unbreakable space communications.',
            slug: 'quantum-computing',
            color: '#ffffff',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
        },
        {
            id: '4',
            title: 'Sustainable Societies',
            description: 'Designing self-sustaining biospheres and circular economies for lunar and martian colonies.',
            slug: 'sustainable-planetary',
            color: '#10b981',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
        },
        {
            id: '5',
            title: 'Astro-Biology',
            description: 'Investigating the origins of life and searching for bio-signatures in the oceans of icy moons.',
            slug: 'astro-biology',
            color: '#f59e0b',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.631.285a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.285-.631a6 6 0 00.517-3.86l-.477-2.388a2 2 0 01.547-1.022l1.16-1.16a2 2 0 012.828 2.828l-1.16 1.16z" /></svg>'
        },
        {
            id: '6',
            title: 'Human Consciousness',
            description: 'Mapping neuro-evolutionary shifts and computational models of mind for extended space travel.',
            slug: 'computational-models',
            color: '#ec4899',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
        }
    ];
}
