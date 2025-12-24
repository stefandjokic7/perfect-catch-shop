import { Component, inject } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { expeditionCards } from '../../shared/constants/expeditions.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.html',
  styleUrl: './expeditions.scss',
  imports: [Card]
})
export class Expeditions {
  private router = inject(Router);

  expeditionCards = expeditionCards;

  readMore(title: string) {
    this.router.navigateByUrl('expedition-details');
  }
}


