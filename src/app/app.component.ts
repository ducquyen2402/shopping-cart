import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-shopping-cart';
  promoCode: string;
 
  products : Product[] = [
    {
      id: 1,
      name: "Product 01",
      description: "abc",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 100000,
      quantity: 2
    },
    {
      id: 2,
      name: "Product 02",
      description: "xyz",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 200000,
      quantity: 5
    }
  ]

  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1 && confirm("Bạn muốn xóa sản phẩm có id = " + id + " ?")) {
      this.products.splice(index, 1);
    }
  }

  // handleApplyPromoCode(data){
  //   this.promoCode = data;
  // }
}
