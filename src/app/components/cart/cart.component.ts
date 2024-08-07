import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() product!: Product;


  constructor(public storeService: StoreService) {}

}
