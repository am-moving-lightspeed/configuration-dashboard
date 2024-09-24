import { Component } from '@angular/core';

import { ButtonLinkComponent } from './button-link/button-link.component';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';

@Component({
  selector: 'nav',
  standalone: true,
  imports: [ButtonLinkComponent, SvgIconComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {}
