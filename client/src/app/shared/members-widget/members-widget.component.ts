import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-members-widget',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './members-widget.component.html',
  styleUrl: './members-widget.component.css'
})
export class MembersWidgetComponent {

}
