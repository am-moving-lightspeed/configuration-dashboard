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
  path = computed(() => `/svg/nav/${this.name()}.svg#${this.name()}`);
  width = input('1rem');
  height = input('1rem');
}
