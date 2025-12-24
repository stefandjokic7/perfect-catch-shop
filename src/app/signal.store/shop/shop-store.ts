import { signalStore, withState } from "@ngrx/signals"
import { withShopMethods } from "./shop-methods"
import { withShopSelectors } from "./shop-selectors"
import { Article } from "../../shared/interfaces/article.interface"

export interface ShopState {
  itemsInCart: Article[];
}

export const initialState: ShopState = {
  itemsInCart: []
}

export const ShopStore = signalStore(
  { providedIn: 'root' },
  withState<ShopState>(initialState),
  withShopMethods(),
  withShopSelectors()
)
