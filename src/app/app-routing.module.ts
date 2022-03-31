import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path:"order",loadChildren: () => import('./order/order.module').then(m => m.OrderModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
