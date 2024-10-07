import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  {
    path: 'log-in',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];
