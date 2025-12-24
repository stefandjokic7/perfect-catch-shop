import { Component, inject, Input } from '@angular/core';
import { ToastService } from '../../../../shared/services/toast';
import { Article } from '../../../../shared/interfaces/article.interface';
import { ShopStore } from '../../../../signal.store/shop/shop-store';

@Component({
  selector: 'app-suggest-modal',
  imports: [],
  templateUrl: './suggest-modal.html',
  styleUrl: './suggest-modal.scss',
})
export class SuggestModal {
  private articles: Article[] = [];
  private shopStore = inject(ShopStore);
  toastService = inject(ToastService);

  @Input()
  set items(value: Article[]) {
    if (value && value.length) {
      this.articles = value;
      this.onItemsReady();
    }
  }

  get items(): Article[] {
    return this.articles;
  }

  onItemsReady() {
    console.log('Items ready', this.articles);
  }

  addInCart(article: Article) {
    this.shopStore.updateItemToChart(article, true);
    this.toastService.show(article.name + ' uspesno dodat u korpu', 'success');
  }
}
