import { Component, inject, input, OnInit, output } from '@angular/core';
import { ShopStore } from '../../../signal.store/shop/shop-store';
import { Article as IArticle } from '../../../shared/interfaces/article.interface';
import { ToastService } from '../../../shared/services/toast';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article implements OnInit {
  article = input<IArticle>();
  shopStore = inject(ShopStore);
  emitOpenSuggestModal = output<string>();
  imgSrc!: string;
  isHovered: boolean = false;

  toastService = inject(ToastService);


  ngOnInit(): void {
    this.imgSrc = this.article()?.img!;
  }

  imgMouseOver() {
    this.imgSrc = this.article()?.hoverImg!;
    this.isHovered = true;
  }
  imgMouseOut() {
    this.imgSrc = this.article()?.img!;
    this.isHovered = false;
  }

  addToChart() {
    this.shopStore.updateItemToChart(this.article()!, true);
    if(this.article()?.name?.includes('Set'))
      this.emitOpenSuggestModal.emit(this.article()?.name!);
    this.toastService.show(this.article()!.name + ' uspesno dodat u korpu', 'success');
  }

}
