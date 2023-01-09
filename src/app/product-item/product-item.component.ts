import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../modules/Product";
import {Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  clicked = false;

  @Input() product! : Product;
  @Output() productSelected = new EventEmitter<Product>();
  @Output() productChosen = new EventEmitter<Product>();

  clickProduct(productId: number) {
    this.route.navigate([`details/${productId}`]);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  ngOnInit(): void {
  }

  constructor(private route: Router, private cartService: CartService) {
  }
}
