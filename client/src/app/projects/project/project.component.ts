import { Component, signal } from '@angular/core';
import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { ProjectDetailComponent } from './detail/project-detail.component';
import { projectDetails } from './project.model';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SvgIconComponent, ProjectDetailComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  availableProjectDetails = signal(projectDetails);
}
