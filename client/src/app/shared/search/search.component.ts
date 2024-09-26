import { Component, input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  placeholder = input('Search');
  alternativeColoring = input(false);
}
