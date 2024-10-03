import { Injectable, signal } from '@angular/core';

import { NavigationOptionId } from './navigation.model';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  selectedNavOption = signal<NavigationOptionId>('projects');

  isSelected(navOptionId: NavigationOptionId) {
    return this.selectedNavOption() === navOptionId;
  }

  select(navOptionId: NavigationOptionId) {
    this.selectedNavOption.set(navOptionId);
  }
}
