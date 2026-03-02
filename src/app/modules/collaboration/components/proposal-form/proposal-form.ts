import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-proposal-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <section class="py-24 bg-[#0B0F19] relative overflow-hidden" id="proposal-form">
      
      <!-- Ambient Glow -->
      <div class="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] bg-[#F4A261]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          <!-- Left Content (2 cols) -->
          <div class="lg:col-span-2 space-y-8 sticky top-24">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-bold tracking-widest uppercase">
              Formal Proposal
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Initiate a <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#F4A261] to-[#00B4D8]">Strategic</span> Partnership
            </h2>
            
            <p class="text-lg text-white/70 font-light leading-relaxed">
              We welcome proposals from academic institutions, space agencies, and deep-tech enterprises aiming to push the boundaries of human knowledge and capability.
            </p>

            <div class="space-y-6 pt-6 border-t border-white/10">
              <div class="flex items-center gap-4 text-white/80">
                <div class="w-10 h-10 rounded-full bg-[#1B3A4B]/50 flex items-center justify-center border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">Secure Submission</h4>
                  <p class="text-xs text-white/50">End-to-end encrypted protocol</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4 text-white/80">
                <div class="w-10 h-10 rounded-full bg-[#1B3A4B]/50 flex items-center justify-center border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#F4A261]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">48-Hour Review</h4>
                  <p class="text-xs text-white/50">Expedited strategic evaluation</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Form (3 cols) -->
          <div class="lg:col-span-3">
            <div class="glass p-8 md:p-12 rounded-[2rem] border border-white/10 bg-[#1B3A4B]/10 backdrop-blur-xl">
              
              <form [formGroup]="proposalForm" (ngSubmit)="onSubmit()" class="space-y-8">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Org Name -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Organization Name <span class="text-[#F4A261]">*</span></label>
                    <input type="text" formControlName="organization" 
                      class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all placeholder:text-white/20"
                      placeholder="Enter legal entity name">
                    <div *ngIf="proposalForm.get('organization')?.touched && proposalForm.get('organization')?.invalid" class="text-xs text-red-400 mt-1">Organization is required</div>
                  </div>

                  <!-- Country -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Country of Origin <span class="text-[#F4A261]">*</span></label>
                    <input type="text" formControlName="country" 
                      class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all placeholder:text-white/20"
                      placeholder="e.g. United States">
                    <div *ngIf="proposalForm.get('country')?.touched && proposalForm.get('country')?.invalid" class="text-xs text-red-400 mt-1">Country is required</div>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Org Type -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Organization Type <span class="text-[#F4A261]">*</span></label>
                    <div class="relative">
                      <select formControlName="orgType" class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select category</option>
                        <option value="university">University / Academia</option>
                        <option value="government">Government / Space Agency</option>
                        <option value="industry">Corporate / Industry</option>
                        <option value="startup">Deep-Tech Startup</option>
                        <option value="ngo">NGO / Foundation</option>
                      </select>
                      <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <!-- Collab Area -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Primary Focus <span class="text-[#F4A261]">*</span></label>
                    <div class="relative">
                      <select formControlName="collaborationArea" class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select focus area</option>
                        <option value="curriculum">Joint Curriculum</option>
                        <option value="research">Research Consortia</option>
                        <option value="technology">Technology Co-development</option>
                        <option value="infrastructure">Shared Infrastructure</option>
                        <option value="other">Other Strategic Initiative</option>
                      </select>
                      <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Overview -->
                <div class="space-y-2">
                  <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Project Overview <span class="text-[#F4A261]">*</span></label>
                  <textarea formControlName="projectOverview" rows="4" 
                    class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all placeholder:text-white/20 resize-none"
                    placeholder="Provide a high-level summary of the proposed collaboration..."></textarea>
                  <div *ngIf="proposalForm.get('projectOverview')?.touched && proposalForm.get('projectOverview')?.invalid" class="text-xs text-red-400 mt-1">Overview is required (min 50 chars)</div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  
                  <!-- Budget -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Budget Framework (Optional)</label>
                    <div class="relative">
                      <select formControlName="budgetRange" class="w-full bg-[#0B0F19]/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#00B4D8]/50 focus:ring-1 focus:ring-[#00B4D8]/30 transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select estimated scale</option>
                        <option value="<500k">Under $500K USD</option>
                        <option value="500k-2m">$500K - $2M USD</option>
                        <option value="2m-10m">$2M - $10M USD</option>
                        <option value=">10m">$10M+ USD</option>
                        <option value="tbd">TBD / Not Applicable</option>
                      </select>
                      <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  <!-- File Upload -->
                  <div class="space-y-2">
                    <label class="text-xs font-bold text-white/50 uppercase tracking-widest">Proposal Document (PDF)</label>
                    <div class="w-full h-[52px] border border-white/20 rounded-xl px-4 flex items-center justify-between text-sm hover:border-[#00B4D8]/50 transition-colors cursor-pointer group/upload bg-[#0B0F19]/50">
                      <input type="file" id="proposalFile" class="hidden" accept=".pdf" (change)="onFileChange($event)">
                      <label for="proposalFile" class="cursor-pointer flex items-center justify-between w-full h-full text-white/70 group-hover/upload:text-[#00B4D8] transition-colors">
                        <span class="truncate pr-4">{{ selectedFileName || 'Upload framework (.pdf)' }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </label>
                    </div>
                    <div *ngIf="fileError" class="text-xs text-red-400 mt-1">{{ fileError }}</div>
                  </div>

                </div>

                <!-- Submit -->
                <button type="submit" [disabled]="proposalForm.invalid" 
                  class="w-full py-5 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#1B3A4B] text-white font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(0,180,216,0.3)] disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1 mt-4">
                  Submit Institutional Proposal
                </button>
                
                <div *ngIf="submitSuccess" class="glass p-4 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-sm text-center font-bold mt-4 animate-fade-in-up flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Proposal securely transmitted.
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ProposalFormComponent implements OnInit {
    proposalForm!: FormGroup;
    selectedFileName: string | null = null;
    submitSuccess = false;
    fileError: string | null = null;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.proposalForm = this.fb.group({
            organization: ['', Validators.required],
            country: ['', Validators.required],
            orgType: ['', Validators.required],
            collaborationArea: ['', Validators.required],
            projectOverview: ['', [Validators.required, Validators.minLength(50)]],
            budgetRange: [''],
            document: [null]
        });
    }

    onFileChange(event: any) {
        this.fileError = null;
        const file = event.target.files[0];

        if (file) {
            // Validate type safely
            if (file.type !== 'application/pdf') {
                this.fileError = 'Only PDF documents are accepted.';
                this.selectedFileName = null;
                this.proposalForm.patchValue({ document: null });
                return;
            }

            // Validate size (e.g., 10MB max)
            if (file.size > 10 * 1024 * 1024) {
                this.fileError = 'File exceeds maximum size of 10MB.';
                this.selectedFileName = null;
                this.proposalForm.patchValue({ document: null });
                return;
            }

            this.selectedFileName = file.name;
            this.proposalForm.patchValue({ document: file });
        }
    }

    onSubmit() {
        if (this.proposalForm.valid && !this.fileError) {
            // Endpoint: POST /api/collaboration-proposal
            console.log('Secure Form Submit:', this.proposalForm.value);

            this.submitSuccess = true;
            this.proposalForm.reset();
            this.selectedFileName = null;

            setTimeout(() => {
                this.submitSuccess = false;
            }, 5000);
        } else {
            // Mark all as touched to trigger specific UI errors
            this.proposalForm.markAllAsTouched();
        }
    }
}
