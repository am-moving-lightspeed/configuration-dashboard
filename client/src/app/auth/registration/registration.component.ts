import { Component } from '@angular/core';

import { InputComponent } from '../../shared/input/input.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { SvgIconComponent } from "../../shared/svg-icon/svg-icon.component";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [InputComponent, ButtonComponent, SvgIconComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {}
