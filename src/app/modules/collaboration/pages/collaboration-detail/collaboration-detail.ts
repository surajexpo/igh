import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-collaboration-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-[#0B0F19] text-white py-24 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4">Collaboration Detail</h1>
        <p class="text-white/60">Viewing details for model: <span class="text-[#00B4D8]">{{ modelSlug }}</span></p>
      </div>
    </div>
  `
})
export class CollaborationDetailComponent {
    @Input() modelSlug?: string;
}
