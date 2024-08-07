import {Component, Input} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [],
  templateUrl: './total.component.html',
  styleUrl: './total.component.scss'
})
export class TotalComponent {
  @Input() total!: number;

  constructor(public storeService: StoreService) {}
  handlePayment() {
    this.storeService.processPayment();
  }
}
