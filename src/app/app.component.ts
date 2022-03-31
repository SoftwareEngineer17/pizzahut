import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IProductCategory } from './Interface';
import { ProductService } from './Services/product.service';
import { distinct, debounceTime } from "rxjs/operators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public title:string = 'FrontEnd';
  public searchForm = new FormGroup({
    search : new FormControl("")
  });;

  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProductCategory();
    
    this.searchForm.get("search").valueChanges?.pipe(debounceTime(1000),distinct()).subscribe(res => { this.productService.searchData.next(res)});
  }
  
  
  
}
