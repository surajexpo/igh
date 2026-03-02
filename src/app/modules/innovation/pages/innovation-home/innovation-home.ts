import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InnovationHeroComponent,
  InnovationPhilosophyComponent,
  CoreInnovationsComponent,
  PipelineTimelineComponent,
  StudentResearchLabComponent,
  ImpactMetricsComponent,
  CaseStudiesComponent,
  EducationInnovationLabComponent,
  CollaborationFormComponent
} from '../../components';

@Component({
  selector: 'app-innovation-home',
  standalone: true,
  imports: [
    CommonModule,
    InnovationHeroComponent,
    InnovationPhilosophyComponent,
    CoreInnovationsComponent,
    PipelineTimelineComponent,
    StudentResearchLabComponent,
    ImpactMetricsComponent,
    CaseStudiesComponent,
    EducationInnovationLabComponent,
    CollaborationFormComponent
  ],
  template: `
    <div class="min-h-screen bg-space-black text-white selection:bg-electric-cyan selection:text-space-black">
      <app-innovation-hero></app-innovation-hero>
      <app-innovation-philosophy></app-innovation-philosophy>
      <app-core-innovations></app-core-innovations>
      <app-pipeline-timeline></app-pipeline-timeline>
      <app-education-innovation-lab></app-education-innovation-lab>
      <app-student-research-lab></app-student-research-lab>
      <app-impact-metrics></app-impact-metrics>
      <app-case-studies></app-case-studies>
      <app-collaboration-form></app-collaboration-form>

      <!-- Final Strategic CTA -->
      <section class="py-32 px-6 max-w-5xl mx-auto text-center relative">
        <div class="absolute inset-0 bg-gradient-to-t from-deep-violet/20 via-transparent to-transparent z-0 blur-3xl rounded-[4rem]"></div>
        
        <div class="glass relative z-10 p-16 md:p-24 rounded-[4rem] border border-white/10 bg-midnight-blue/40 backdrop-blur-xl overflow-hidden group">
          
          <div class="absolute inset-0 bg-gradient-to-tr from-electric-cyan/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div class="relative z-10 space-y-10">
            <h2 class="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
              Engineer the <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-blue drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]">Future</span>.<br>
              Innovate Beyond <span class="text-white">Earth</span>.<br>
              Impact <span class="text-transparent bg-clip-text bg-gradient-to-r from-deep-violet to-electric-cyan">Humanity</span>.
            </h2>
            
            <div class="flex flex-wrap justify-center gap-6">
              <button class="px-10 py-5 rounded-2xl bg-white text-space-black font-black tracking-widest uppercase hover:bg-electric-cyan hover:shadow-[0_0_20px_rgba(0,245,212,0.5)] transition-all transform hover:-translate-y-1">
                Join Innovation Lab
              </button>
              <button class="px-10 py-5 rounded-2xl glass border border-white/20 text-white font-black tracking-widest uppercase hover:bg-white/10 hover:border-electric-cyan/50 transition-all transform hover:-translate-y-1">
                Fund a Project
              </button>
            </div>

            <div class="pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8">
              <a href="/education" class="text-xs font-bold text-white/50 hover:text-electric-cyan transition-colors tracking-widest uppercase flex items-center gap-2">
                Explore Education Programs <span class="text-lg leading-none">→</span>
              </a>
              <a href="/research" class="text-xs font-bold text-white/50 hover:text-electric-cyan transition-colors tracking-widest uppercase flex items-center gap-2">
                Discover Research <span class="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class InnovationHomeComponent { }
