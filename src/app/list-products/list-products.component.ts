import {Component, OnInit} from '@angular/core';
import { Product } from '../modules/Product';
import {ProductService} from "../service/product.service";
import {Response} from "../modules/Response";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  products : Array<Product>;
  constructor(private productService : ProductService) {
    this.products=new Array<Product>();
  }
  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: Response) => {
        this.products = response.products;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProducts(key: string): void {
    const results: Product[] = [];
    for (const product of this.products) {
      if (product.title.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || product.brand.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProducts();
    }
  }
}
