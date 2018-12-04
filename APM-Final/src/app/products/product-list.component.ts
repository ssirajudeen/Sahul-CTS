import { Component, OnInit } from '@angular/core';

import { IProduct, ProductModel } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchFormData:any = {
    SearchBy:"SKC",
    SKC:'',
    UPC:'',
    Zipcode:'',
    SortBy:''
  }
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: ProductModel[] = [];
  products: ProductModel[] = [];

  constructor(private productService: ProductService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): ProductModel[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: ProductModel) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    
  console.log(this.searchFormData);
    this.productService.getProducts().subscribe(
      (products:any) => {
        this.products = products.items;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}
