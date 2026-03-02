import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-deep-void border-t border-white/5 py-12 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="space-y-4 col-span-1 md:col-span-2">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-gradient-to-tr from-neon-blue to-cosmic-purple rounded-full flex items-center justify-center p-1">
              <svg class="text-white w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <span class="text-lg font-bold tracking-tight text-white">IGH SPACE</span>
          </div>
          <p class="text-white/50 max-w-md text-sm leading-relaxed">
            Improving Human Life and Orchestrating Global Harmony Through Space Education & Research. 
            A global leader in scientific excellence and ethical framework for the future of humanity.
          </p>
          <div class="flex gap-4 pt-4">
            <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-blue transition-colors">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-blue transition-colors">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-neon-blue transition-colors">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div>
           <h4 class="text-white font-semibold mb-6">Quick Links</h4>
           <ul class="space-y-4">
             <li><a routerLink="/research" class="text-white/50 hover:text-white transition-colors text-sm">Research Domains</a></li>
             <li><a routerLink="/education" class="text-white/50 hover:text-white transition-colors text-sm">Education Programs</a></li>
             <li><a routerLink="/innovation" class="text-white/50 hover:text-white transition-colors text-sm">Innovation Lab</a></li>
             <li><a routerLink="/collaboration" class="text-white/50 hover:text-white transition-colors text-sm">Global Partners</a></li>
           </ul>
        </div>

        <div>
           <h4 class="text-white font-semibold mb-6">Support</h4>
           <ul class="space-y-4">
             <li><a href="#" class="text-white/50 hover:text-white transition-colors text-sm">Contact Us</a></li>
             <li><a href="#" class="text-white/50 hover:text-white transition-colors text-sm">Join Fellowship</a></li>
             <li><a href="#" class="text-white/50 hover:text-white transition-colors text-sm">Sitemap</a></li>
             <li><a href="#" class="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
           </ul>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-white/30 text-xs">© 2026 IGH Space Research Organization. All rights reserved.</p>
        <p class="text-white/30 text-xs">A Space for Human progress and Global Unity.</p>
      </div>
    </footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class FooterComponent { }
