import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() 
  products: Product[];
  

  getTotal(){
    let count = 0;
    this.products.forEach(product => {
      count += product.quantity;
    });

    return count;
  }
}
