import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  @Input() promoCode: string;

  applyPromoCode() {
    if (this.promoCode === "HN123") {

    }
  }

  @Input() 
  products: Product[];

  calculateSubTotal() {
    let subTotal = 0;
    this.products.forEach(product => {
      subTotal += product.quantity * product.price
    });
    return subTotal;
  }

}
