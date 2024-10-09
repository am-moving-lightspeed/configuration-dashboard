import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NavigationOptionComponent } from './navigation-option/navigation-option.component';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { navigationOptions } from './navigation.model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NavigationOptionComponent, SvgIconComponent, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  availableOptions = signal(navigationOptions);
}
