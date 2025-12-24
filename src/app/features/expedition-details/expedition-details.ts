import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { LeftSlideAnimation } from "../../shared/directives/left-slide-animation";
import { BaseModal } from '../../shared/components/base-modal/base-modal';
import { SuggestModal } from '../shop/article/suggest-modal/suggest-modal';
import { Article } from '../../shared/interfaces/article.interface';
import { pikeFishingExpedition, pikeFishingExpeditionLures } from '../../shared/constants/articles.constants';


@Component({
  selector: 'app-expedition-details',
  imports: [LeftSlideAnimation, BaseModal, SuggestModal],
  templateUrl: './expedition-details.html',
  styleUrl: './expedition-details.scss',
})
export class ExpeditionDetails {
  isModalOpen = false;
  suggestedArticles!: Article[];

  closeModal() {
    this.isModalOpen = false;
  }

  onShowEquipment() {
    this.suggestedArticles = pikeFishingExpedition;
    this.isModalOpen = true;
  }

    onShowLures() {
    this.suggestedArticles = pikeFishingExpeditionLures;
    this.isModalOpen = true;
  }
}
