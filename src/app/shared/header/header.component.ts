import { Component, input } from '@angular/core';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '[class.header-scrolled]': '!isHeroVisible()',
  },
})
export class HeaderComponent {
  readonly isHeroVisible = input.required();
}
