import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseModalArguments } from '../interfaces/base-modal.interface';

@Injectable({
  providedIn: 'root',
})
export class BaseModalService {
  public showModal$ = new BehaviorSubject<boolean>(false);
  public modalBody!: TemplateRef<any> | null;
  public modalArguments!: BaseModalArguments;

  showModal(modalTemplate: TemplateRef<any>, modalArguments: BaseModalArguments) {
    this.resetModal();
    this.showModal$.next(true);
    this.modalBody = modalTemplate;
    this.modalArguments = modalArguments;
  }

  hideModal() {
    this.resetModal();
    this.showModal$.next(false);
  }

  private resetModal() {
    this.modalBody = null;
    this.modalArguments = {};
  }
}
