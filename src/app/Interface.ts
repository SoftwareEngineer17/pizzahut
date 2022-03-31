export interface IProductCategory{
    product_Category_Id:number;
    product_Category_Name:string;
    productSubCategory:IProductSubCategory[];
}

export interface IProductSubCategory{
    product_Sub_Category_Id:number;
    product_SubCategory_Name :string;
    product:IProduct[];
}

export interface IProduct{
    product_Id :number;
    name:string;
    product_Image:string;
    description:string
    price :string
    discount_Price:number
    itemsOrWeight:number
}

export interface IProductCategoryData{
    product_Category_Id:number;
    product_Category_Name:string;
}