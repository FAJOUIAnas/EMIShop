import {Injectable, OnInit} from '@angular/core';
import {Product} from "../modules/Product";
import {HttpClient} from "@angular/common/http";
import {Response} from "../modules/Response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  productsInCart : Array<Number> = [];
  constructor(private http : HttpClient) { }

  public getProductsInCart(){
    return this.productsInCart;
  }

  public getProducts(): Observable<Response> {
      return this.http.get<Response>("https://dummyjson.com/products");
  }

  public getProductsOfCategory(category: string): Observable<Response> {
    return this.http.get<Response>(`https://dummyjson.com/products/category/${category}`)
  }

  public getProductById(productId: Number): Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${productId}`)
  }

  public addToCart(productId: number) {
    this.productsInCart.push(productId);
  }




}
