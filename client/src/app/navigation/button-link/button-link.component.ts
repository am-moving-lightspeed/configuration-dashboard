import { Component, input } from '@angular/core';

import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css'
})
export class ButtonLinkComponent {
  text = input.required<string>();
  link = input.required<string>();
}
