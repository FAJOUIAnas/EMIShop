import {Product} from "./Product";

export class Response {
  products : Array<Product> = [];

  public constructor(products: Array<Product>) {
    this.products = products;
  }
}
