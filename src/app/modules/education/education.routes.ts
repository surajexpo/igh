import { Routes } from '@angular/router';

export const EDUCATION_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/education-home/education-home').then(m => m.EducationHomeComponent)
    },
    {
        path: ':programSlug',
        loadComponent: () => import('./pages/program-detail/program-detail').then(m => m.ProgramDetailComponent)
    }
];
