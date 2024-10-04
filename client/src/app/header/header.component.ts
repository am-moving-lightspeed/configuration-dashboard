import { Component } from '@angular/core';

import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { IconButtonComponent } from '../shared/icon-button/icon-button.component';
import { SearchComponent } from "../shared/search/search.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgIconComponent, IconButtonComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
