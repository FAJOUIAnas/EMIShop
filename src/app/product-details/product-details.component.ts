import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../modules/Product";
import {ProductService} from "../service/product.service";
import {Response} from "../modules/Response";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product !: Product;
  constructor(private productService : ProductService, private  route : ActivatedRoute) {}

  ngOnInit(): void {
    const productId : number = this.route.snapshot.params['id'];
    this.getProduct(productId);
  }

  public getProduct(productId : number): void {
    this.productService.getProductById(productId).subscribe(
      (response: Product) => {
        this.product = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
