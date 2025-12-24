import { patchState, signalStoreFeature, type, withMethods } from "@ngrx/signals";
import { ShopState, ShopStore } from "./shop-store";
import { Article } from "../../shared/interfaces/article.interface";
import emailjs from 'emailjs-com';

export function withShopMethods() {
  return signalStoreFeature(
    { state: type<ShopState>() },
    withMethods((store) => ({

      updateItemToChart(article: Article, isAddMode: boolean) {
        if(store.itemsInCart().findIndex(i => i.guid === article.guid)!== -1) {
          const itemIndex = store.itemsInCart().findIndex(i => i.guid === article.guid);
          let item;
          if(isAddMode) {
            item = {
              ...store.itemsInCart()[itemIndex], 
              articleAmountInCart: store.itemsInCart()[itemIndex].articleAmountInCart! + 1
            };
          } else {
            item = {
              ...store.itemsInCart()[itemIndex], 
              articleAmountInCart: store.itemsInCart()[itemIndex].articleAmountInCart! - 1
            };
          }
          const updatedArticles = store.itemsInCart();
          updatedArticles[itemIndex] = item;
          patchState(store, { 
            itemsInCart: updatedArticles
          });
        } else {
          const itemsInChart = store.itemsInCart();
          itemsInChart.push(article);
          patchState(store, { itemsInCart: itemsInChart });
        }
      },

      removeItemFromCart(articleId: string) {
        patchState(store, { 
          itemsInCart: store.itemsInCart().filter(i => i.guid !== articleId) })
      },

      getTotalPrice() {
        let totalPrice = 0;
        store.itemsInCart().forEach(i => {
          totalPrice = totalPrice + i.price! * i.articleAmountInCart!;
        });
        return totalPrice;
      },


      generateOrderMessage() {
        let messageText: string = '';
        store.itemsInCart().forEach(i => {
          messageText = messageText + i.name + ', kolicina: ' + i.articleAmountInCart + '\n'
        });
        return messageText
      },

      sendEmail(userDetails: string) {
        emailjs.send(
          'service_6ovy39e',
          'template_7f84s3v',
          {
            message: 
              'Stigla je nova porudzbina: \n \n' + 
              this.generateOrderMessage() + '\n' +
              userDetails + '\n \n' +
              'Perfect Catch team',
            email: 'sdjokic722@gmail.com'
          },
          'p3gXm5zBbobZQhHkg'
        );
      }

    }))
  )
}
