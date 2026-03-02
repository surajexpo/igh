import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-enrollment-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <section class="py-24 px-6 max-w-4xl mx-auto">
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">Academic <span class="text-gradient">Application</span></h2>
        <p class="text-white/50 text-lg">Your journey to the stars starts with a single step.</p>
      </div>

      <div class="glass p-10 md:p-16 rounded-[2.5rem] border border-white/10 relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-accent-cyan/10 to-deep-violet/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        
        <form [formGroup]="enrollmentForm" (ngSubmit)="onSubmit()" class="grid md:grid-cols-2 gap-8 relative z-10">
          <div class="space-y-4">
            <label class="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 ml-1">Full Name</label>
            <input type="text" formControlName="fullName" placeholder="Aris Thorne"
                   class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all">
          </div>

          <div class="space-y-4">
            <label class="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 ml-1">Email Address</label>
            <input type="email" formControlName="email" placeholder="aris.thorne@cosmos.edu"
                   class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all">
          </div>

          <div class="md:col-span-2 space-y-4">
            <label class="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 ml-1">Academic Pathway</label>
            <select formControlName="program" 
                    class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan transition-all appearance-none cursor-pointer outline-none">
              <option value="" disabled>Select your desired program</option>
              <option value="tech-fundamentals">Space Technology Fundamentals</option>
              <option value="satellite-eng">Satellite Systems Engineering</option>
              <option value="ai-space">AI for Space Applications</option>
              <option value="quantum">Quantum Computing Lab</option>
              <option value="sustainable">Sustainable Planetary Systems</option>
              <option value="fellowship">Global Research Fellowship</option>
            </select>
          </div>

          <div class="md:col-span-2 space-y-4">
            <label class="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 ml-1">Statement of Interest</label>
            <textarea formControlName="statement" rows="5" placeholder="Describe your vision for the future of space exploration..."
                      class="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-none focus:border-accent-cyan transition-all resize-none"></textarea>
          </div>

          <div class="md:col-span-2 space-y-4">
            <label class="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 ml-1">Resume / CV (PDF Only)</label>
            <div class="relative">
              <input type="file" (change)="onFileChange($event)" class="hidden" #fileInput>
              <div (click)="fileInput.click()" 
                   class="w-full bg-white/5 border-2 border-dashed border-white/10 rounded-3xl px-6 py-10 text-center cursor-pointer hover:border-accent-cyan/50 transition-all group/file">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white/20 mx-auto mb-4 group-hover/file:text-accent-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p class="text-white/40 text-sm">Click to upload or drag and drop your file</p>
              </div>
            </div>
          </div>

          <div class="md:col-span-2 pt-6">
            <button type="submit" [disabled]="enrollmentForm.invalid"
                    class="w-full bg-accent-cyan text-space-black font-black tracking-[0.2em] py-5 rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-accent-cyan/10 disabled:opacity-50 disabled:hover:translate-y-0 disabled:shadow-none uppercase">
              Submit Global Application
            </button>
          </div>
        </form>
      </div>
    </section>
  `
})
export class EnrollmentFormComponent {
    enrollmentForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.enrollmentForm = this.fb.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            program: ['', Validators.required],
            statement: ['', [Validators.required, Validators.minLength(100)]]
        });
    }

    onFileChange(event: any) {
        // Basic file upload stub
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
        }
    }

    onSubmit() {
        if (this.enrollmentForm.valid) {
            console.log('Enrollment application submitted:', this.enrollmentForm.value);
            alert('Application received. Our academic advisors will review your submission and contact you via email.');
            this.enrollmentForm.reset({ program: '' });
        }
    }
}
