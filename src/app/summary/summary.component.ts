import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  subTotal: number = 21.97
  tax: number = this.subTotal * 10 / 100
  total: number = this.subTotal + this.tax
}
