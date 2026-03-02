import { Routes } from '@angular/router';

export const COLLABORATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/collaboration-home/collaboration-home').then(m => m.CollaborationHomeComponent),
        title: 'Global Collaboration | Space Education'
    },
    {
        path: ':modelSlug',
        loadComponent: () => import('./pages/collaboration-detail/collaboration-detail').then(m => m.CollaborationDetailComponent),
        title: 'Partnership Detail | Space Education'
    }
];
