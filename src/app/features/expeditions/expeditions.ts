import { Component, inject, OnInit } from '@angular/core';
import { Card } from '../../shared/components/card/card';
import { expeditionCards } from '../../shared/constants/expeditions.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expeditions',
  templateUrl: './expeditions.html',
  styleUrl: './expeditions.scss',
  imports: [Card]
})
export class Expeditions implements OnInit {
  private router = inject(Router);

    ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  expeditionCards = expeditionCards;

  readMore(title: string) {
    this.router.navigateByUrl('expedition-details');
  }
}


