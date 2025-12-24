import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../../../shared/interfaces/article.interface';
import { ShopStore } from '../../../signal.store/shop/shop-store';

@Component({
  selector: 'app-cart-item',
  imports: [FormsModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss',
})
export class CartItem implements OnInit {
  article = input<Article>();
  private shopStore = inject(ShopStore);
  itemAmount!: number;
  totalOneArticlePrice!: number;

  ngOnInit(): void {
    this.itemAmount = this.article()?.articleAmountInCart!;
    this.totalOneArticlePrice = this.itemAmount * this.article()?.price!;
  }

  updateQuantity(newValue: number) {
    this.totalOneArticlePrice = this.itemAmount * this.article()?.price!;
    this.shopStore.updateItemToChart(
      { ...this.article()!, articleAmountInCart: this.itemAmount }, 
      newValue > this.article()!.articleAmountInCart! ? true : false);
  }
  removeItemFromCart() {
    this.shopStore.removeItemFromCart(this.article()?.guid!);
  }

  
}
