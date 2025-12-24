import { AfterViewChecked, AfterViewInit, Component, input } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel implements AfterViewChecked {
  images = input.required<string[]>();
  private initialized = false;

  ngAfterViewChecked() {
    if (!this.initialized && this.images().length > 0) {
      const el = document.getElementById('carouselExample');
      new bootstrap.Carousel(el, {
        interval: 1500,
        ride: 'carousel',
        pause: false,
      });
      this.initialized = true;
    }
  }
}
