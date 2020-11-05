import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // @Input() 
  // products: Product[];

  @Input()
  totalItems: number
  

  // getTotal(){
  //   let count = 0;
  //   this.products.forEach(product => {
  //     count += product.quantity;
  //   });

  //   return count;
  // }
}
