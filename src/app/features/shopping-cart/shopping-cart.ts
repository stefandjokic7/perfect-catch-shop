import { Component, inject } from '@angular/core';
import { CartItem } from './cart-item/cart-item';
import { ShopStore } from '../../signal.store/shop/shop-store';
import { BaseModal } from '../../shared/components/base-modal/base-modal';
import { UserInfoModal } from './user-info-modal/user-info-modal';

@Component({
  selector: 'app-shopping-cart',
  imports: [CartItem, BaseModal, UserInfoModal],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss',
})
export class ShoppingCart {
  isModalOpen = false;
  shopStore = inject(ShopStore);

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmModal(userData: any) {
    this.shopStore.sendEmail(userData);
    this.closeModal();
  }

  onOrder() {
    this.openModal();
    this.closeModal;
  }

  onConfimUserInfo() {
    this.closeModal();
  }
}
