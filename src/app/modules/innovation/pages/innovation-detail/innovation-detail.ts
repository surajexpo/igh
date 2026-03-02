import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-innovation-detail',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="min-h-screen bg-space-black text-white pt-24 px-6 md:px-12 lg:px-24">
      <div class="max-w-4xl mx-auto py-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Innovation: {{ slug }}</h1>
        <p class="text-white/70 text-lg">Detailed view for the selected innovation will be implemented here.</p>
      </div>
    </div>
  `
})
export class InnovationDetailComponent implements OnInit {
    slug: string | null = null;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.slug = params.get('slug');
        });
    }
}
