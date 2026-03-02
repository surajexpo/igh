import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CollaborationHeroComponent,
  CollaborationPhilosophyComponent,
  CollaborationModelsComponent,
  GlobalNetworkComponent,
  JointProgramsComponent,
  ExchangeTimelineComponent,
  ImpactDashboardComponent,
  ProposalFormComponent,
  StrategicCtaComponent
} from '../../components';

@Component({
  selector: 'app-collaboration-home',
  standalone: true,
  imports: [
    CommonModule,
    CollaborationHeroComponent,
    CollaborationPhilosophyComponent,
    CollaborationModelsComponent,
    GlobalNetworkComponent,
    JointProgramsComponent,
    ExchangeTimelineComponent,
    ImpactDashboardComponent,
    ProposalFormComponent,
    StrategicCtaComponent
  ],
  template: `
    <div class="min-h-screen bg-[#0B0F19] text-white selection:bg-[#00B4D8] selection:text-white">
      <app-collaboration-hero></app-collaboration-hero>
      <app-collaboration-philosophy></app-collaboration-philosophy>
      <app-collaboration-models></app-collaboration-models>
      <app-global-network></app-global-network>
      <app-joint-programs></app-joint-programs>
      <app-exchange-timeline></app-exchange-timeline>
      <app-impact-dashboard></app-impact-dashboard>
      <app-proposal-form></app-proposal-form>
      <app-strategic-cta></app-strategic-cta>
    </div>
  `
})
export class CollaborationHomeComponent { }
