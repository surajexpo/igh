import { Routes } from '@angular/router';

export const RESEARCH_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/research-home').then(m => m.ResearchHomeComponent)
    },
    {
        path: ':slug',
        loadComponent: () => import('./pages/research-detail').then(m => m.ResearchDetailComponent)
    }
];
