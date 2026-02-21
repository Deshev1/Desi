import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ContentComponent } from './content/content.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HeaderComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly isHeroVisible = signal(true);

  onHeroMovement(isVisible: boolean) {
    this.isHeroVisible.set(isVisible);
  }
}
