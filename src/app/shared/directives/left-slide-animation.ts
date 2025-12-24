import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLeftSlideAnimation]',
})
export class LeftSlideAnimation implements AfterViewInit {

  constructor(private el: ElementRef) { }
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('show');
          observer.unobserve(this.el.nativeElement); // animira se jednom
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(this.el.nativeElement);
  }
}
