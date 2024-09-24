import { Injectable, signal } from '@angular/core';

import { NavigationOption } from './navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  selectedNavOption = signal<NavigationOption>('Projects');

  isSelected(navOptionId: NavigationOption) {
    return this.selectedNavOption() === navOptionId;
  }

  select(navOptionId: NavigationOption) {
    this.selectedNavOption.set(navOptionId);
  }
}
