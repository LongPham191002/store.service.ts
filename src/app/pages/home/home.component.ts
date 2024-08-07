import {Component, Input} from '@angular/core';
import {Product} from "../../models/product.model";
import {StoreService} from "../../services/store.service";
import {ProductCardComponent} from "../../components/product-card/product-card.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductCardComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public storeService: StoreService) { }


}
