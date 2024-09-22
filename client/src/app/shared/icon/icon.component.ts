import { Component, ElementRef, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent implements OnInit {
  private hostElement = inject(ElementRef);

  name = input.required({ transform: name => `svg/${name}.svg#${name}` });

  ngOnInit() {}
}
