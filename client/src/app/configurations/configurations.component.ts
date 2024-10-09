import { Component } from '@angular/core';
import { ConfigurationEntryComponent } from "./configuration-entry/configuration-entry.component";

@Component({
  selector: 'app-configurations',
  standalone: true,
  imports: [ConfigurationEntryComponent],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.css'
})
export class ConfigurationsComponent {

}
