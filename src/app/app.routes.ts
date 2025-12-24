import { Routes } from '@angular/router';
import { WelcomePage } from './features/welcome-page/welcome-page';
import { Shop } from './features/shop/shop';

export const routes: Routes = [
  { 'path': '', component: WelcomePage },
  { 'path': 'welcome', component: WelcomePage },
  {
    'path': 'shop',
    loadComponent: () => import('./features/shop/shop').then(c => c.Shop)
  },
  { 
    'path': 'expeditions',
    loadComponent: () => import('./features/expeditions/expeditions').then(c => c.Expeditions)
   },
  { 
    'path': 'expedition-details',
    loadComponent: () => import('./features/expedition-details/expedition-details').then(c => c.ExpeditionDetails)
   },
     { 
    'path': 'shopping-cart',
    loadComponent: () => import('./features/shopping-cart/shopping-cart').then(c => c.ShoppingCart)
   }
];
