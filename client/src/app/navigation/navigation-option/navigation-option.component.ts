import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { NavigationOptionId } from '../navigation.model';

@Component({
  selector: 'app-nav-option',
  standalone: true,
  imports: [SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './navigation-option.component.html',
  styleUrl: './navigation-option.component.css'
})
export class NavigationOptionComponent {
  id = input.required<NavigationOptionId>();
  name = input.required<string>();
  iconName = input.required<string>();
  link = input.required<string>();
}
