import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../service/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../modules/Product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/product.service";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {Response} from "../modules/Response";

@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.css']
})
export class ListProductCategoryComponent implements OnInit {
  products : Array<Product>;

  constructor(private productService : ProductService, private  route : ActivatedRoute) {
    this.products=new Array<Product>();
  }

  ngOnInit(): void {
    const category : string = this.route.snapshot.params['category'];
    this.getProductsOfCategory(category);
  }

  public getProductsOfCategory(category : string): void {
    this.productService.getProductsOfCategory(category).subscribe(
      (response: Response) => {
        this.products = response.products;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
