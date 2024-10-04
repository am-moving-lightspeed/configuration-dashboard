import { Component, input } from '@angular/core';

import { SvgIconComponent } from '../../../shared/svg-icon/svg-icon.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
  iconName = input.required<string>();
}
