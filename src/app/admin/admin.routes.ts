import { InjectionToken } from '@angular/core';
import { Route } from '@angular/router';
import { AdminHomeComponent, AdminUsersComponent } from './components';

export const ADMIN_API_KEY = new InjectionToken<number>('ADMIN_API_KEY');

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    providers: [{provide: ADMIN_API_KEY, useValue: 12345}],
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'users', component: AdminUsersComponent }
    ]
  }
];
