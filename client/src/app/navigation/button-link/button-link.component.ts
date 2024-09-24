import { Component, computed, inject, input } from '@angular/core';

import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { NavigationService } from '../navigation.service';
import { NavigationOption } from '../navigation.model';

@Component({
  selector: 'app-button-link',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.css'
})
export class ButtonLinkComponent {
  id = input.required<NavigationOption>();
  link = input.required<string>();

  selected = computed(() => this.navigationService.isSelected(this.id()));

  private readonly navigationService = inject(NavigationService);

  select() {
    this.navigationService.select(this.id());
  }
}
