import { Component, HostListener } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss',
  standalone: true,
  imports: [Carousel]
})
export class WelcomePage {
  // imagesList: string[] = ['surko.png', 'drina.png', 'night.png', 'pike.png'];

  imagesDesktop = ['drina.png', 'surko.png', 'grdica.png']

  imagesMobile = [
    'images/welcome-imgs/drina_v.png',
    'images/welcome-imgs/lim_v.png',
    'images/welcome-imgs/pike_v.jpg',
    'images/welcome-imgs/surko_v.png',
  ];

  imagesList: string[] = [];

  ngOnInit() {
    this.updateImages(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateImages(event.target.innerWidth);
  }

  updateImages(width: number) {
    if (width <= 600) {  // ili neka druga vrednost za telefon
      this.imagesList = this.imagesMobile;
    } else {
      this.imagesList = this.imagesDesktop;
    }
  }

  onFacebookCard() {
    window.open('https://www.facebook.com/people/Perfect-catch/61556479269688', '_blank');
  }

  onInstagramCard() {
    window.open('https://www.instagram.com/_perfect_catch_/?hl=en', '_blank');
  }
  
  onYouTubeCard() {
    window.open('https://www.youtube.com/channel/UCFs10esyMH62d6-1aD5xB0w', '_blank');
  }
}
