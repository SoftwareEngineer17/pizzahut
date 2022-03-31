import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductCategory } from '../Interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = environment.Url;
  public productCategoryData$:IProductCategory[];
  public searchData = new BehaviorSubject<string>(" ");
  constructor(private http:HttpClient) { }

  public getProductCategory(){
      this.http.get<IProductCategory[]>(this.url+"/product/Category").subscribe(res => {this.productCategoryData$ = res; console.log(res);});
  };
  
  
}
  

