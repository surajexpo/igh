import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ResearchHeroComponent,
  ResearchPhilosophyComponent,
  CoreDomainsComponent,
  ResearchLifecycleComponent,
  ActiveProjectsComponent,
  ImpactMetricsComponent,
  PublicationsListComponent,
  CollaborationFormComponent
} from '../../components';

@Component({
  selector: 'app-research-home',
  standalone: true,
  imports: [
    CommonModule,
    ResearchHeroComponent,
    ResearchPhilosophyComponent,
    CoreDomainsComponent,
    ResearchLifecycleComponent,
    ActiveProjectsComponent,
    ImpactMetricsComponent,
    PublicationsListComponent,
    CollaborationFormComponent
  ],
  template: `
    <div class="min-h-screen bg-space-black pt-20">
      <app-research-hero></app-research-hero>
      
      <div class="space-y-0 pr-6 sm:pr-0 pb-20">
        <app-research-philosophy></app-research-philosophy>
        <app-core-domains></app-core-domains>
        <app-research-lifecycle></app-research-lifecycle>
        <app-active-projects></app-active-projects>
        <app-impact-metrics></app-impact-metrics>
        <app-publications-list></app-publications-list>
        <app-collaboration-form></app-collaboration-form>

        <!-- Final CTA -->
        <section class="py-24 px-6 max-w-5xl mx-auto text-center">
          <div class="glass p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-t from-cosmic-purple/20 to-transparent"></div>
             
             <div class="relative z-10 space-y-8">
               <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
                 Join the Global Mission to <br class="hidden md:block">
                 <span class="text-gradient">Elevate Humanity</span> Through Space Science
               </h2>
               
               <div class="flex flex-wrap justify-center gap-6">
                 <button class="px-8 py-4 rounded-xl bg-white text-space-black font-bold hover:bg-neon-blue transition-all">
                   Apply for Fellowship
                 </button>
                 <button class="px-8 py-4 rounded-xl glass border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                   Explore Programs
                 </button>
               </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class ResearchHomeComponent {
  constructor() { }
}
