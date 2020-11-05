import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  promoCode: string;
  @Input() 
  products: Product[];
  @Input()
  subTotals: number;
  @Input()
  subTotalsApplySale: number;
  @Input()
  vat: number;
  @Input()
  total: number;
  @Input()
  saleOff: number

  @Output()
  onApplyPromoCode = new EventEmitter();

  applyPromoCode() {
    // if (this.promoCode === "HN10") {
    //   alert("Chúc mừng! Bạn được giảm giá 10%")
    // }

    this.onApplyPromoCode.emit(this.promoCode);
  }

  // calculateSubTotal() {
  //   let subTotal = 0;
  //   this.products.forEach(product => {
  //     subTotal += product.quantity * product.price
  //   });
  //   return subTotal;
  // }

}
