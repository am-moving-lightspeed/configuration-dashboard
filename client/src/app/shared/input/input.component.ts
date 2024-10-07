import { Component, computed, input } from '@angular/core';

import { InputParams } from './input.model';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  params = input.required<InputParams>();
  showLabel = computed(() => this.params().showLabel ?? false);

  labelText = computed(() => {
    if (this.params().label) {
      return this.params().label;
    }
    const idValue = this.params().id;
    return idValue.charAt(0).toUpperCase() + idValue.slice(1);
  });

  placeholderText = computed(() => this.params().placeholder ?? this.labelText());
}
