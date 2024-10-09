import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ConfigurationsComponent } from '../configurations/configurations.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'configurations',
        component: ConfigurationsComponent
      }
    ]
  }
];
