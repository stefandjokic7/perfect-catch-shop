import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './base-modal.html',
  styleUrl: './base-modal.scss',
})
export class BaseModal {
  title = input<string>('');
  show = input<boolean>(false);
  emitClose = output();

  onClose() {
    this.emitClose.emit();
  }
}
