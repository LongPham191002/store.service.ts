import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartComponent} from "../../components/cart/cart.component";
import {StoreService} from "../../services/store.service";
import {TotalComponent} from "../../components/total/total.component";
import {RouterLink} from "@angular/router";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [
    CartComponent,TotalComponent,RouterLink
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() product!: Product;
  @Input() total!: number;


  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }
  protected readonly StoreService = StoreService;
}
