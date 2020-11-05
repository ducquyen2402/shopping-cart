import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
 
  products : Product[] = []
  totalItems: number
  subTotals: number
  subTotalsApplySale: number = 0
  vat: number
  total: number
  promoCode: string
  saleOff: number = 0

  constructor(private productService: ProductService) {
    this.products = this.productService.products
  }

  ngOnInit(){
    this.totalItems = this.productService.getTotal(this.products);
    this.subTotals = this.productService.calculateSubTotal();
    this.vat = this.subTotals * 10/100;
    this.total = this.subTotals + this.vat;
  }

  removeProduct(id){
    if (confirm("Bạn muốn xóa sản phẩm có id = " + id + " ?")) {
      this.productService.removeProduct(id);
      this.totalItems = this.productService.getTotal(this.products);
      this.updateSummary(this.saleOff);
    }
  }

  updateQuantity(products: Product[]){
    this.products = products;
    this.totalItems = this.productService.getTotal(this.products);
    this.updateSummary(this.saleOff);
  }

  applyPromoCode(promoCode){
    if (promoCode.toLowerCase() === "HN10".toLowerCase()) {
      alert("Chúc mừng! Bạn được giảm giá 10%")
      // this.saleOff = this.subTotals * 10/100;
      // this.subTotalsApplySale = this.subTotals - this.saleOff;
      // this.vat = this.subTotalsApplySale * 10/100
      // this.total = this.subTotalsApplySale + this.vat;
      this.updateSummary(10);
    } else if (promoCode.toLowerCase() === "HN20".toLowerCase()) {
      alert("Chúc mừng! Bạn được giảm giá 20%")
      // this.saleOff = this.subTotals*20/100;
      // this.subTotalsApplySale = this.subTotals - this.saleOff;
      // this.vat = this.subTotalsApplySale * 10/100
      // this.total = this.subTotalsApplySale + this.vat;
      this.updateSummary(20);
    } else {
      alert("Mã giảm giá không đúng hoặc hết hiệu lực!")
      this.updateSummary(0);
    }
  }

  updateSummary(saleOff: number){
    this.saleOff = saleOff;
    this.subTotals = this.productService.calculateSubTotal();
    if (saleOff !== 0) {
      this.subTotalsApplySale = this.subTotals - saleOff*this.subTotals/100;
      this.vat = this.subTotalsApplySale * 10/100
      this.total = this.subTotalsApplySale + this.vat;
    } else {
      this.vat = this.subTotals * 10/100;
      this.total = this.subTotals + this.vat;
    }
  }
}
