import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';
import { Summary } from './summary.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
 
  products : Product[] = []
  summary: Summary
  totalItems: number
  promoCode: string

  constructor(private productService: ProductService) {
    this.products = this.productService.products
    this.summary = this.productService.summary
  }

  ngOnInit(){
    this.totalItems = this.productService.getTotal(this.products);
    this.summary.subTotals = this.productService.calculateSubTotal();
    this.summary.vat = this.summary.subTotals * 10/100;
    this.summary.total = this.summary.subTotals + this.summary.vat;
  }

  removeProduct(id){
    if (confirm("Bạn muốn xóa sản phẩm có id = " + id + " ?")) {
      this.productService.removeProduct(id);
      this.totalItems = this.productService.getTotal(this.products);
      this.updateSummary(this.summary.saleOff);
    }
  }

  updateQuantity(products: Product[]){
    this.products = products;
    this.totalItems = this.productService.getTotal(this.products);
    this.updateSummary(this.summary.saleOff);
  }

  applyPromoCode(promoCode){
    if (promoCode.toLowerCase() === "HN10".toLowerCase()) {
      alert("Chúc mừng! Bạn được giảm giá 10%")
      this.updateSummary(10);
    } else if (promoCode.toLowerCase() === "HN20".toLowerCase()) {
      alert("Chúc mừng! Bạn được giảm giá 20%")
      this.updateSummary(20);
    } else {
      alert("Mã giảm giá không đúng hoặc hết hiệu lực!")
      this.updateSummary(0);
    }
  }

  updateSummary(saleOff: number){
    this.summary.saleOff = saleOff;
    this.summary.subTotals = this.productService.calculateSubTotal();
    if (saleOff !== 0) {
      this.summary.subTotalsApplySale = this.summary.subTotals - saleOff * this.summary.subTotals/100;
      this.summary.vat = this.summary.subTotalsApplySale * 10/100
      this.summary.total = this.summary.subTotalsApplySale + this.summary.vat;
    } else {
      this.summary.vat = this.summary.subTotals * 10/100;
      this.summary.total = this.summary.subTotals + this.summary.vat;
    }
  }

  shopping() {
    this.products = this.productService.productsInit
    this.summary = this.productService.summary
    this.ngOnInit();
  }
}
