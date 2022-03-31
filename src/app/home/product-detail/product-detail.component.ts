import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/Interface';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  
  productData: IProduct;
  constructor(private productService:ProductService,@Inject(MAT_DIALOG_DATA) public data:DialogData) { }

  ngOnInit(): void {
    console.log(this.data.Product_Id);
    if(this.data.Product_Id != null){
      this.productService.productCategoryData$.forEach(c => c.productSubCategory.forEach(sc => sc.product.forEach(p=> {if(p.product_Id == this.data.Product_Id){this.productData = p}})));
    }
  }
// Edit File from remote 2
}

export interface DialogData{
  Product_Id:number;
}
