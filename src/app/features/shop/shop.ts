import { Component } from '@angular/core';
import { Article as IArticle } from './../../shared/interfaces/article.interface';
import { pikeSuggestedEqupment, shopArticles, zanderSuggestedEqupment } from '../../shared/constants/articles.constants';
import { BaseModal } from '../../shared/components/base-modal/base-modal';
import { Article } from './article/article';
import { SuggestModal } from './article/suggest-modal/suggest-modal';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  imports: [ Article, BaseModal, SuggestModal ]
})
export class Shop {
  articles = shopArticles;
  isModalOpen = false;
  sugnestedArticles!: IArticle[];
  selectedArticle!: string;

  closeModal() {
    this.isModalOpen = false;
  }

  openSuggestModal(articleName: string) {
    this.isModalOpen = true;
    this.selectedArticle = articleName;
  }

  generateSuggestedArticles(articleName: string): IArticle[]{
    if(articleName.includes('Set varalica za stuku')) {
      return pikeSuggestedEqupment;
    } else if(articleName.includes('Set varalica za smudja')) {
      return zanderSuggestedEqupment;
    } else { return [] };
  }
}
