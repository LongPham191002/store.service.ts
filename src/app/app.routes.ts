import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {DetailProductComponent} from "./pages/detail-product/detail-product.component";
import {ProductCartComponent} from "./pages/product-cart/product-cart.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ListProductComponent
  },

  {
    path: 'cart',
    component: ProductCartComponent,
  },
  {
    path: 'product/:id',
    component: DetailProductComponent
  }
];
