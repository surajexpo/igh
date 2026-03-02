import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface Pathway {
  id: string;
  title: string;
  description: string;
  icon: string;
  safeIcon?: SafeHtml;
}

@Component({
  selector: 'app-pathways-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div class="text-center mb-20 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Learning <span class="text-gradient">Pathways</span></h2>
        <p class="text-white/50 max-w-2xl mx-auto text-lg">A structured progression from foundational knowledge to global leadership.</p>
      </div>

      <div class="relative px-4 pb-20">
        <!-- Horizontal Line for Desktop -->
        <div class="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block -translate-y-12"></div>
        
        <!-- Timeline Nodes -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
          @for (path of pathways; track path.title) {
            <div class="text-center group relative pt-12 md:pt-0">
              <!-- Connector for Mobile -->
              <div class="absolute top-0 left-1/2 w-[1px] h-12 bg-white/10 md:hidden -translate-x-1/2"></div>
              
              <div class="w-20 h-20 rounded-full glass border border-white/10 flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:border-accent-cyan/50 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                <div class="w-10 h-10 text-white opacity-40 group-hover:opacity-100 transition-opacity" [innerHTML]="path.safeIcon || path.icon"></div>
              </div>

              <!-- Content -->
              <div class="space-y-3 relative z-10">
                <span class="text-[10px] font-black tracking-[0.3em] uppercase text-accent-cyan block">Phase {{ path.id }}</span>
                <h3 class="text-xl font-bold text-white tracking-widest uppercase">{{ path.title }}</h3>
                <p class="text-xs text-white/40 leading-relaxed max-w-[180px] mx-auto italic">{{ path.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class PathwaysTimelineComponent implements OnInit {
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.pathways.forEach(p => p.safeIcon = this.sanitizer.bypassSecurityTrustHtml(p.icon));
  }

  pathways: Pathway[] = [
    {
      id: 'I',
      title: 'Foundation',
      description: 'Core scientific principles & space system basics.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>'
    },
    {
      id: 'II',
      title: 'Technical',
      description: 'Intermediate training in applied engineering & data analysis.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>'
    },
    {
      id: 'III',
      title: 'Advanced',
      description: 'Specialization in deep space systems & quantum computational models.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
    },
    {
      id: 'IV',
      title: 'Immersion',
      description: 'Active participation in institutional research & mission design.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.631.285a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.16 1.16a2 2 0 002.828 2.828l1.16-1.16a2 2 0 00.547-1.022l.477-2.387a6 6 0 01.517-3.86l.285-.631a6 6 0 00.517-3.86l-.477-2.388a2 2 0 01.547-1.022l1.16-1.16a2 2 0 012.828 2.828l-1.16 1.16z" /></svg>'
    },
    {
      id: 'V',
      title: 'Fellowship',
      description: 'Global leadership roles in orchestrating cosmic harmony.',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>'
    }
  ];
}
