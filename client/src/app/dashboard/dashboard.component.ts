import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MembersWidgetComponent } from '../shared/members-widget/members-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavigationComponent, HeaderComponent, ProjectsComponent, MembersWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {}
