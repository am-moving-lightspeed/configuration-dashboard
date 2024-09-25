import { Component } from '@angular/core';
import { SvgIconComponent } from "../../shared/svg-icon/svg-icon.component";
import { DetailComponent } from "./detail/detail.component";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [SvgIconComponent, DetailComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
