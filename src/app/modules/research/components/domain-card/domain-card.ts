import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ResearchDomain {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  color: string;
}

@Component({
  selector: 'app-domain-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div [routerLink]="['/research', domain.slug]" 
         class="group relative glass p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col">
      <!-- Glow Effect -->
      <div class="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity blur-3xl"
           [style.backgroundColor]="domain.color"></div>
      
      <!-- Icon Container -->
      <div class="w-14 h-14 rounded-2xl glass mb-8 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
        <div [innerHTML]="safeIcon" class="w-7 h-7 flex items-center justify-center"></div>
      </div>

      <h3 class="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-gradient transition-all duration-300">
        {{ domain.title }}
      </h3>
      
      <p class="text-white/50 leading-relaxed mb-8 flex-grow">
        {{ domain.description }}
      </p>

      <div class="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors duration-300 mt-auto">
        <span class="text-sm font-bold tracking-wider uppercase">View Details</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  `
})
export class DomainCardComponent implements OnInit {
  @Input() domain!: ResearchDomain;
  safeIcon!: SafeHtml;
  private sanitizer = inject(DomSanitizer);

  ngOnInit() {
    this.safeIcon = this.sanitizer.bypassSecurityTrustHtml(this.domain.icon);
  }
}
