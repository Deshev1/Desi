import {
  Component,
  ElementRef,
  output,
  signal,
  viewChild,
} from '@angular/core';
@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  heroSentinel = viewChild.required('heroSentinel', { read: ElementRef });
  heroMoved = output<boolean>();
  private intersectionObserver: IntersectionObserver | undefined;
  readonly isHeroVisible = signal(false);
  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isHeroVisible.set(entry.isIntersecting);
          this.heroMoved.emit(this.isHeroVisible());
        });
      },
      {
        threshold: [0, 0.01, 1],
      },
    );
    this.intersectionObserver.observe(this.heroSentinel().nativeElement);
  }
}
