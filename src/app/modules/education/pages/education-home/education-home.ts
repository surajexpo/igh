import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EducationHeroComponent,
  LearningPhilosophyComponent,
  CoreProgramsComponent,
  PathwaysTimelineComponent,
  CurriculumAccordionComponent,
  FacultyMentorshipComponent,
  ImpactCountersComponent,
  EnrollmentFormComponent
} from '../../components';

@Component({
  selector: 'app-education-home',
  standalone: true,
  imports: [
    CommonModule,
    EducationHeroComponent,
    LearningPhilosophyComponent,
    CoreProgramsComponent,
    PathwaysTimelineComponent,
    CurriculumAccordionComponent,
    FacultyMentorshipComponent,
    ImpactCountersComponent,
    EnrollmentFormComponent
  ],
  template: `
    <div class="min-h-screen bg-space-black">
      <app-education-hero></app-education-hero>
      
      <div class="space-y-0">
        <app-learning-philosophy></app-learning-philosophy>
        <app-core-programs></app-core-programs>
        <app-pathways-timeline></app-pathways-timeline>
        <app-curriculum-accordion></app-curriculum-accordion>
        <app-faculty-mentorship></app-faculty-mentorship>
        <app-impact-counters></app-impact-counters>
        <app-enrollment-form></app-enrollment-form>

        <!-- Final CTA -->
        <section class="py-32 px-6 max-w-5xl mx-auto text-center">
          <div class="glass p-16 md:p-24 rounded-[4rem] border border-white/10 relative overflow-hidden bg-gradient-to-t from-deep-violet/20 to-transparent">
            <div class="relative z-10 space-y-10">
              <h2 class="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
                Join the Next Generation of <br class="hidden md:block">
                <span class="text-gradient">Space Innovators</span>
              </h2>
              
              <div class="flex flex-wrap justify-center gap-6">
                <button class="px-10 py-5 rounded-2xl bg-white text-space-black font-black tracking-widest uppercase hover:bg-accent-cyan transition-all transform hover:-translate-y-1">
                  Apply Now
                </button>
                <button class="px-10 py-5 rounded-2xl glass border border-white/20 text-white font-black tracking-widest uppercase hover:bg-white/10 transition-all transform hover:-translate-y-1">
                  Speak to Advisor
                </button>
              </div>

              <div class="pt-10 border-t border-white/5 flex justify-center gap-8">
                <a href="/research" class="text-xs font-bold text-white/30 hover:text-accent-cyan transition-colors tracking-widest uppercase">Explore Research</a>
                <a href="#" class="text-xs font-bold text-white/30 hover:text-accent-cyan transition-colors tracking-widest uppercase">Innovation Lab</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class EducationHomeComponent { }
