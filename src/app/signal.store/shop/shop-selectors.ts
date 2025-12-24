import { computed } from "@angular/core";
import { signalStoreFeature, type, withComputed } from "@ngrx/signals";
import { ShopState } from "./shop-store";

export function withShopSelectors() {
  return signalStoreFeature(
    { state: type<ShopState>() },
    withComputed(({
      itemsInCart
    }) => ({
      getItemsInCart: computed(() => itemsInCart())
    }))
  );
}
