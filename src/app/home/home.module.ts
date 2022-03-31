import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductInventoyComponent } from './product-inventoy/product-inventoy.component';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes:Routes = [
  {path:"",component:ProductInventoyComponent}
]

@NgModule({
  declarations: [
    ProductComponent, 
    ProductInventoyComponent, ProductDetailComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule
  ]
})
export class HomeModule { }
