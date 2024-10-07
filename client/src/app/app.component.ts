import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './shared/search/search.component';
import { MembersWidgetComponent } from './shared/members-widget/members-widget.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from "./auth/registration/registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeaderComponent,
    ProjectsComponent,
    SearchComponent,
    MembersWidgetComponent,
    LoginComponent,
    RegistrationComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
