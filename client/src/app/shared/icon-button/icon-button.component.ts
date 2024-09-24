import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appIconBtn]',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css',
  host: {
    '[style.width]': 'width()',
    '[style.height]': 'height()'
  }
})
export class IconButtonComponent {
  width = input('2.5rem');
  height = input('2.5rem');
}
