import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Summary } from './summary.model';

@Injectable({ // cho cac class khac goi den
  providedIn: 'root' // pham vi hoat dong
})
export class ProductService {
  products : Product[] = [
    {
      id: 1,
      name: "Product 01",
      description: "abc",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 100000,
      quantity: 1
    },
    {
      id: 2,
      name: "Product 02",
      description: "xyz",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 200000,
      quantity: 1
    }
  ]

  productsInit : Product[] = [
    {
      id: 1,
      name: "Product 01",
      description: "abc",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 100000,
      quantity: 1
    },
    {
      id: 2,
      name: "Product 02",
      description: "xyz",
      image: "https://clickbuy.com.vn/uploads/2019/07/thumb_Note10_2.jpg",
      price: 200000,
      quantity: 1
    }
  ]

  summary: Summary = {
    subTotals: 0,
    saleOff: 0,
    subTotalsApplySale: 0,
    vat: 0,
    total: 0
  }
  constructor() { }

  removeProduct(id){
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      
    }
  }

  getTotal(products: Product[]){
    let count = 0;
    this.products.forEach(product => {
      count += product.quantity;
    });

    return count;
  }

  calculateSubTotal() {
    let subTotal = 0;
    this.products.forEach(product => {
      subTotal += product.quantity * product.price
    });
    return subTotal;
  }
  
}
