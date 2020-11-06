import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Summary } from '../summary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  promoCode: string;
  @Input() 
  products: Product[] = [];
  // @Input()
  // subTotals: number;
  // @Input()
  // subTotalsApplySale: number;
  // @Input()
  // vat: number;
  // @Input()
  // total: number;
  // @Input()
  // saleOff: number

  @Input()
  summary: Summary

  @Output()
  onApplyPromoCode = new EventEmitter();

  applyPromoCode() {
    this.onApplyPromoCode.emit(this.promoCode);
  }
}
