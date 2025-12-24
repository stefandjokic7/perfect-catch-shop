import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  img = input<string>();
  title = input<string>();
  description = input<string>();
  emitClickReadMore = output<string>();

  onReadMore() {
    this.emitClickReadMore.emit(this.title()!);
  }
}
