import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./modules/home/home').then(m => m.HomeComponent)
            },
            {
                path: 'research',
                loadChildren: () => import('./modules/research/research.routes').then(m => m.RESEARCH_ROUTES)
            },
            {
                path: 'education',
                loadChildren: () => import('./modules/education/education.routes').then(m => m.EDUCATION_ROUTES)
            },
            {
                path: 'innovation',
                loadChildren: () => import('./modules/innovation/innovation.routes').then(m => m.INNOVATION_ROUTES)
            },
            {
                path: 'collaboration',
                loadChildren: () => import('./modules/collaboration/collaboration.routes').then(m => m.COLLABORATION_ROUTES)
            },
            { path: '**', redirectTo: '' }
        ]
    }
];
