import { Routes } from '@angular/router';

import { routes as authRoutes } from './auth/auth.routes';
import { routes as dashboardRoutes } from './dashboard/dashboard.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  ...authRoutes,
  ...dashboardRoutes
];
