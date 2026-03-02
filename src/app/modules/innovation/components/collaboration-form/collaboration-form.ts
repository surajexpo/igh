import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-collaboration-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <section class="py-24 bg-midnight-blue relative overflow-hidden" id="partner">
      <!-- Background Accents -->
      <div class="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay"></div>
      <div class="absolute left-[-20%] bottom-[-20%] w-[800px] h-[800px] bg-electric-cyan/5 blur-[150px] rounded-full"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <!-- Left: Info -->
          <div class="space-y-8">
            <h2 class="text-4xl md:text-5xl font-bold text-white leading-tight">
              Propose a <span class="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-neon-blue">Joint Innovation</span>
            </h2>
            <p class="text-lg text-white/70 font-light leading-relaxed">
              We align with visionary governments, corporations, and academic institutions to co-develop technologies that transcend boundaries.
            </p>
            
            <ul class="space-y-4 pt-4 border-t border-white/10">
              <li class="flex items-center gap-4 text-white">
                <span class="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center shrink-0 text-electric-cyan font-bold">✓</span>
                Industry Co-Development Model
              </li>
              <li class="flex items-center gap-4 text-white">
                <span class="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center shrink-0 text-electric-cyan font-bold">✓</span>
                Government Innovation Alliances
              </li>
              <li class="flex items-center gap-4 text-white">
                <span class="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center shrink-0 text-electric-cyan font-bold">✓</span>
                Startup Incubation Programs
              </li>
              <li class="flex items-center gap-4 text-white">
                <span class="w-8 h-8 rounded-full bg-electric-cyan/20 flex items-center justify-center shrink-0 text-electric-cyan font-bold">✓</span>
                Research Commercialization
              </li>
            </ul>
          </div>

          <!-- Right: Form -->
          <div class="glass relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-space-black/80 backdrop-blur-xl">
            <form [formGroup]="collabForm" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Org Name -->
                <div class="space-y-2">
                  <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Organization Name</label>
                  <input type="text" formControlName="organization" 
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/30 transition-all placeholder:text-white/20"
                    placeholder="e.g. Global Tech Corp">
                  <div *ngIf="collabForm.get('organization')?.touched && collabForm.get('organization')?.invalid" class="text-xs text-red-400 mt-1">Organization is required</div>
                </div>

                <!-- Contact Name -->
                <div class="space-y-2">
                  <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Contact Person</label>
                  <input type="text" formControlName="contactName" 
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/30 transition-all placeholder:text-white/20"
                    placeholder="e.g. Dr. Jane Doe">
                  <div *ngIf="collabForm.get('contactName')?.touched && collabForm.get('contactName')?.invalid" class="text-xs text-red-400 mt-1">Contact Name is required</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Email -->
                <div class="space-y-2">
                  <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Email Address</label>
                  <input type="email" formControlName="email" 
                    class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/30 transition-all placeholder:text-white/20"
                    placeholder="jane.doe@example.com">
                  <div *ngIf="collabForm.get('email')?.touched && collabForm.get('email')?.invalid" class="text-xs text-red-400 mt-1">Valid email is required</div>
                </div>

                <!-- Domain -->
                <div class="space-y-2">
                  <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Domain of Interest</label>
                  <select formControlName="domain" class="w-full bg-space-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/30 transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select a domain</option>
                    <option value="satellite">Satellite Intelligence</option>
                    <option value="robotics">Space Robotics</option>
                    <option value="energy">Renewable Energy</option>
                    <option value="ai">AI Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <!-- Summary -->
              <div class="space-y-2">
                <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Proposal Summary</label>
                <textarea formControlName="summary" rows="4" 
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-cyan/50 focus:ring-1 focus:ring-electric-cyan/30 transition-all placeholder:text-white/20 resize-none"
                  placeholder="Briefly describe the collaborative project..."></textarea>
                <div *ngIf="collabForm.get('summary')?.touched && collabForm.get('summary')?.invalid" class="text-xs text-red-400 mt-1">Summary is required</div>
              </div>
              
              <!-- File Upload -->
              <div class="space-y-2">
                <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Supporting Document (Optional)</label>
                <div class="w-full border-2 border-dashed border-white/20 rounded-xl px-4 py-6 text-center hover:bg-white/5 hover:border-electric-cyan/50 transition-all cursor-pointer group/upload">
                  <input type="file" id="file" class="hidden" (change)="onFileChange($event)">
                  <label for="file" class="cursor-pointer text-sm text-white/70 group-hover/upload:text-electric-cyan transition-colors flex flex-col items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span *ngIf="!selectedFileName">Upload whitepaper or project brief</span>
                    <span *ngIf="selectedFileName" class="text-electric-cyan font-bold">{{ selectedFileName }}</span>
                  </label>
                </div>
              </div>

              <!-- Submit -->
              <button type="submit" [disabled]="collabForm.invalid" 
                class="w-full py-4 rounded-xl bg-gradient-to-r from-electric-cyan to-neon-blue text-space-black font-black tracking-widest uppercase hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1">
                Propose Joint Innovation
              </button>
              
              <p *ngIf="submitSuccess" class="text-electric-cyan text-sm text-center font-bold mt-4 animate-fade-in-up">Proposal submitted successfully. Our team will contact you shortly.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CollaborationFormComponent implements OnInit {
    collabForm!: FormGroup;
    selectedFileName: string | null = null;
    submitSuccess = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.collabForm = this.fb.group({
            organization: ['', Validators.required],
            contactName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            domain: ['', Validators.required],
            summary: ['', Validators.required],
            file: [null]
        });
    }

    onFileChange(event: any) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.selectedFileName = file.name;
            this.collabForm.patchValue({ file: file });
        }
    }

    onSubmit() {
        if (this.collabForm.valid) {
            // Endpoint: POST /api/innovation-collaboration
            console.log('Form Submit:', this.collabForm.value);
            this.submitSuccess = true;
            this.collabForm.reset();
            this.selectedFileName = null;

            setTimeout(() => {
                this.submitSuccess = false;
            }, 5000);
        }
    }
}
