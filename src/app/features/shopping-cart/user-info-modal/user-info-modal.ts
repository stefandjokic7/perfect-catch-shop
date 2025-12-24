import { Component, inject, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { zip } from 'rxjs';
import { ShopStore } from '../../../signal.store/shop/shop-store';
import { ToastService } from '../../../shared/services/toast';

@Component({
  selector: 'app-user-info-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './user-info-modal.html',
  styleUrl: './user-info-modal.scss',
})
export class UserInfoModal implements OnInit {
  userDetails!: FormGroup;
  shopStore = inject(ShopStore);
  toastService = inject(ToastService);
  emitOnConfirm = output();

  ngOnInit(): void {
    this.initUserDetailsForm();
  }

  initUserDetailsForm() {
    this.userDetails = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      adress: new FormControl(null, [Validators.required]),
      apartmant: new FormControl(),
      city: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      email: new FormControl(),
      phoneNumber: new FormControl(null, [Validators.required]),
    });
  }

  onConfirm() {
    this.shopStore.sendEmail(
      this.userDetails.get('name')?.value + ' ' + this.userDetails.get('lastname')?.value + '\n' +
      this.userDetails.get('adress')?.value + '\n' +
      this.userDetails.get('apartmant')?.value + '\n' +
      this.userDetails.get('city')?.value + '\n' +
      this.userDetails.get('zip')?.value + '\n' +
      this.userDetails.get('email')?.value || 'no-email' + '\n' +
      this.userDetails.get('phoneNumber')?.value + '\n'
    );
    this.emitOnConfirm.emit();
    this.toastService.show('Porudzbina uspesno kreirana', 'success');
  }
}
