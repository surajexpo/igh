import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramCardComponent, EducationProgram } from '../program-card/program-card';

@Component({
    selector: 'app-core-programs',
    standalone: true,
    imports: [CommonModule, ProgramCardComponent],
    template: `
    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Academic <span class="text-gradient">Programs</span></h2>
        <p class="text-white/50 max-w-2xl mx-auto text-lg">Rigorous curricula designed for the space-faring era.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (program of programs; track program.id) {
          <app-program-card [program]="program" class="h-full" />
        }
      </div>
    </section>
  `
})
export class CoreProgramsComponent {
    programs: EducationProgram[] = [
        {
            id: '1',
            title: 'Space Tech Fundamentals',
            duration: '12 Weeks',
            mode: 'Online',
            level: 'Beginner',
            description: 'An introductory course covering orbital mechanics, satellite communication, and the basics of space-ground systems.',
            slug: 'space-tech-fundamentals'
        },
        {
            id: '2',
            title: 'Satellite Systems Eng',
            duration: '24 Weeks',
            mode: 'Hybrid',
            level: 'Advanced',
            description: 'Intensive engineering program focused on the design, integration, and testing of small satellite constellations.',
            slug: 'satellite-systems-eng'
        },
        {
            id: '3',
            title: 'AI for Space Applications',
            duration: '16 Weeks',
            mode: 'Research-Based',
            level: 'Advanced',
            description: 'Developing autonomous decision architectures for robotic explorers and orbital maintenance systems.',
            slug: 'ai-space-apps'
        },
        {
            id: '4',
            title: 'Quantum Computing Lab',
            duration: '18 Weeks',
            mode: 'Hybrid',
            level: 'Advanced',
            description: 'Next-gen computational models for complex spacecraft simulations and unbreakable encryption.',
            slug: 'quantum-computing'
        },
        {
            id: '5',
            title: 'Sustainable Planetary Systems',
            duration: '1 Year',
            mode: 'Research-Based',
            level: 'Fellowship',
            description: 'The foundation for multi-planetary survival: biosystems, resource recycling, and habitat engineering.',
            slug: 'sustainable-systems'
        },
        {
            id: '6',
            title: 'Youth Space Innovation Lab',
            duration: '8 Weeks',
            mode: 'In-person',
            level: 'Beginner',
            description: 'Inspiring the next generation through hands-on rocketry, coding, and collaborative design challenges.',
            slug: 'youth-lab'
        }
    ];
}
