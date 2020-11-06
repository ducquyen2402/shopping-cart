import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  
  @Input() 
  products : Product[]

  @Output()
  onRemoveProduct = new EventEmitter();

  @Output()
  onChangeQuantity = new EventEmitter();

  @Output()
  onShopNow = new EventEmitter();

  removeProduct(id: number) {
    // const index = this.products.findIndex(product => product.id === id);
    // if (index !== -1 && confirm("Bạn muốn xóa sản phẩm có id = " + id + " ?")) {
    //   this.products.splice(index, 1);
    // }

    this.onRemoveProduct.emit(id);
  }

  changeQuantity() {
    this.onChangeQuantity.emit(this.products)
  }

  shopNow(){
    this.onShopNow.emit();
  }

}
