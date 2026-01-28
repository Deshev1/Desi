import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HeaderComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  readonly el = inject(ElementRef);

  readonly observer = new IntersectionObserver((entries) =>
    console.info(entries),
  );

  ngAfterViewInit(): void {
    this.observer.observe(this.el.nativeElement);
  }
}
