import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  host: {
    '[style.width]': 'width()',
    '[style.height]': 'height()'
  }
})
export class SvgIconComponent {
  name = input.required<string>();
  subPath = input('', { transform: subPath => (subPath ? `${subPath}/` : '') });
  width = input('1rem');
  height = input('1rem');

  path = computed(() => `/svg/${this.subPath()}${this.name()}.svg#${this.name()}`);
}
