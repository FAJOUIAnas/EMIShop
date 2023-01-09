import {Product} from "./Product";

export class CartDetail {
  product : Product;
  quantity : number;

  public constructor(product : Product ,quantity : number) {
    this.product = product;
    this.quantity=quantity;
  }


}
