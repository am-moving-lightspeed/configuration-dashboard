import { Component } from '@angular/core';

import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { IconButtonComponent } from '../shared/icon-button/icon-button.component';

@Component({
  selector: 'header',
  standalone: true,
  imports: [SvgIconComponent, IconButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
