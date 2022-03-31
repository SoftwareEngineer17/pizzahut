import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IProductCategory } from 'src/app/Interface';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-inventoy',
  templateUrl: './product-inventoy.component.html',
  styleUrls: ['./product-inventoy.component.scss']
})
export class ProductInventoyComponent implements OnInit{
  
  public productCategoryData:IProductCategory[];
  public triplicateproductCategoryData:IProductCategory[];
  public duplicateproductCategoryData:IProductCategory[];
  private startIndex:number = 0;
  private endIndex:number = 5;
  public noProductStatus = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    setTimeout(() => { 
      this.productCategoryData = this.productService.productCategoryData$;
      this.prev();
      this.getSelectCategory("Grocery");
      debugger;
      this.productService.searchData.subscribe(res =>  
        {
          if(res != " " && res != null && res != undefined){
            console.log(
              this.productCategoryData.filter(pc => pc.productSubCategory.filter(psc => psc.product.filter(p => p.name.startsWith(res)))));
          }
        
      }

        //write  code for search here 2

      );
    },1000);
  }
  
  public prev(){
    console.log("prev call");
    console.log(this.startIndex);
    if(this.startIndex != 0){
      this.startIndex = this.startIndex -5;
      this.endIndex = this.endIndex - 5;
    } 
    this.duplicateproductCategoryData = this.productCategoryData.slice(this.startIndex,this.endIndex);
    console.log(this.startIndex);
  }

  public next(){
    console.log("next call");
    console.log(this.startIndex);
    
    if(this.endIndex < this.productCategoryData.length){
      this.startIndex = this.startIndex + 5;
      this.endIndex = this.endIndex + 5;
    }
    this.duplicateproductCategoryData = this.productCategoryData.slice(this.startIndex,this.endIndex);
    console.log(this.startIndex);
  }

  public getSelectCategory(productCategory:string){
    console.log(productCategory);
    this.triplicateproductCategoryData = this.productCategoryData.filter(p => p.product_Category_Name == productCategory);
    
    this.noProductStatus = true;
    this.triplicateproductCategoryData.forEach(pc => pc.productSubCategory.forEach(psc => {if(psc.product.length > 0){this.noProductStatus = false};}))
    console.log(this.noProductStatus);
    
  }


}

