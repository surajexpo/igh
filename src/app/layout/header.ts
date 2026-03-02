import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="fixed top-0 left-0 w-full z-50 glass-dark border-b border-white/10 px-6 py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-2 cursor-pointer group" routerLink="/">
          <div class="w-10 h-10 bg-gradient-to-tr from-neon-blue to-cosmic-purple rounded-full flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
            <svg class="text-white w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <span class="text-xl font-bold tracking-tight text-white group-hover:text-neon-blue transition-colors">IGH</span>
        </div>
        
        <nav class="hidden md:flex items-center gap-8">
          <a routerLink="/research" routerLinkActive="text-neon-blue" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Research</a>
          <a routerLink="/education" routerLinkActive="text-accent-cyan" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Education</a>
          <a routerLink="/innovation" routerLinkActive="text-cosmic-purple" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Innovation</a>
          <a routerLink="/collaboration" routerLinkActive="text-white" class="text-sm font-medium text-white/70 hover:text-white transition-colors">Collaboration</a>
          <div class="px-5 py-2 rounded-full cursor-not-allowed bg-gradient-to-r from-neon-blue to-cosmic-purple text-white text-sm font-semibold opacity-80 transition-all">Join Mission</div>
        </nav>

        <button class="md:hidden text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HeaderComponent { }
