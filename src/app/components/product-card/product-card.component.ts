import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product.model";
import {AuthService} from "../../services/auth.service";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
 @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<string>();
  constructor(public storeService: StoreService) {}
  addToCart() {
    this.addToCartEvent.emit('add me pls');
  }


}
