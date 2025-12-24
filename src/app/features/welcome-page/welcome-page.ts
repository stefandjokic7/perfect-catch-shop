import { Component } from '@angular/core';
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
  imagesList: string[] = ['drina.png', 'surko.png', 'grdica.png'];

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
