import { Component, computed, inject, input } from '@angular/core';

import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { NavigationService } from '../navigation.service';
import { NavigationOptionId } from '../navigation.model';

@Component({
  selector: 'app-nav-option',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './navigation-option.component.html',
  styleUrl: './navigation-option.component.css'
})
export class NavigationOptionComponent {
  id = input.required<NavigationOptionId>();
  name = input.required<string>();
  iconName = input.required<string>();

  selected = computed(() => this.navigationService.isSelected(this.id()));

  private readonly navigationService = inject(NavigationService);

  select() {
    this.navigationService.select(this.id());
  }
}
