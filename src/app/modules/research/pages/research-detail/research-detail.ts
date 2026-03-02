import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-research-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-space-black pt-32 px-6">
      <div class="max-w-4xl mx-auto glass p-8 rounded-3xl">
        <h1 class="text-3xl font-bold text-white mb-4 tracking-tight">Research Domain Details</h1>
        <p class="text-white/60 leading-relaxed">Detailed information about this research domain will be presented here.</p>
      </div>
    </div>
  `
})
export class ResearchDetailComponent { }
