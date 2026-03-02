import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-collaboration-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <section class="py-24 px-6 max-w-4xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Research <span class="text-gradient">Collaboration</span></h2>
        <p class="text-white/50 text-lg">Join our global network of innovators and explorers.</p>
      </div>

      <div class="glass p-8 md:p-12 rounded-3xl border border-white/10">
        <form [formGroup]="collabForm" (ngSubmit)="onSubmit()" class="grid md:grid-cols-2 gap-8">
          <div class="space-y-2">
            <label class="text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Organization Name</label>
            <input type="text" formControlName="orgName" 
                   class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors">
          </div>

          <div class="space-y-2">
            <label class="text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Email Address</label>
            <input type="email" formControlName="email" 
                   class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors">
          </div>

          <div class="md:col-span-2 space-y-2">
            <label class="text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Research Interest</label>
            <select formControlName="domain" 
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors appearance-none outline-none">
              <option value="exploration">Space Exploration</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="bio">Astro-Biology</option>
              <option value="energy">Sustainable Energy</option>
            </select>
          </div>

          <div class="md:col-span-2 space-y-2">
            <label class="text-xs font-bold tracking-widest uppercase text-white/40 ml-1">Brief Proposal Abstract</label>
            <textarea formControlName="proposal" rows="4"
                      class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none"></textarea>
          </div>

          <div class="md:col-span-2">
            <button type="submit" [disabled]="collabForm.invalid"
                    class="w-full bg-neon-blue text-space-black font-bold py-4 rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0">
              Submit Collaboration Request
            </button>
          </div>
        </form>
      </div>
    </section>
  `
})
export class CollaborationFormComponent {
    collabForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.collabForm = this.fb.group({
            orgName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            domain: ['exploration', Validators.required],
            proposal: ['', [Validators.required, Validators.minLength(50)]]
        });
    }

    onSubmit() {
        if (this.collabForm.valid) {
            console.log('Collaboration request sent:', this.collabForm.value);
            alert('Thank you! Your research proposal has been submitted.');
            this.collabForm.reset({ domain: 'exploration' });
        }
    }
}
