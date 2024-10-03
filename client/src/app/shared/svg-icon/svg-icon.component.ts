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
  prefixedName = input.required<string>({ alias: 'name' });
  width = input('1rem');
  height = input('1rem');

  path = computed(() => {
    const actualName = this.prefixedName().split('/').at(-1);
    return `/svg/${this.prefixedName()}.svg#${actualName}`;
  });
}
