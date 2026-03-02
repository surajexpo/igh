import { Routes } from '@angular/router';

export const INNOVATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/innovation-home/innovation-home').then(m => m.InnovationHomeComponent)
    },
    {
        path: ':slug',
        loadComponent: () => import('./pages/innovation-detail/innovation-detail').then(m => m.InnovationDetailComponent)
    }
];
