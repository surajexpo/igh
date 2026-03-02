import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'research/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'education/:programSlug',
    renderMode: RenderMode.Server
  },
  {
    path: 'innovation/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'collaboration/:modelSlug',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
