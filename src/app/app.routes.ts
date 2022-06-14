import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/lazy-standalone/lazy.component').then(module => module.LazyComponent)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(module => module.ADMIN_ROUTES)
  }
];

