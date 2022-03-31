import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderItemsComponent } from './order-items/order-items.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes = [
  {path:"",component:OrderItemsComponent}
]

@NgModule({
  declarations: [OrderItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
