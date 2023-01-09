import {Component, OnInit} from '@angular/core';
import {Product} from "../modules/Product";
import {CartDetail} from "../modules/CartDetail";
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cart.service";

class cartDetail {
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartDetailList: CartDetail[];
  public grandtotal : number = 0;

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res =>{
        this.cartDetailList=res;
        this.grandtotal = this.cartService.getTotalPrice();
        console.log("-------------->"+res);
      });

    console.log("le service has "+this.cartService.cartItemList);
  }

  constructor(private cartService: CartService) {
    this.cartDetailList = new Array<CartDetail>();
  }
}
