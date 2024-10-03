import { Component, signal } from '@angular/core';

import { NavigationOptionComponent } from './navigation-option/navigation-option.component';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { NAVIGATION_OPTIONS, NavigationOption } from './navigation.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavigationOptionComponent, SvgIconComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  availableOptions = signal(NAVIGATION_OPTIONS);
}
