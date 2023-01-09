import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public numItem: number = 0;
  constructor(private cartService : CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.numItem = res.length;
      })
  }
}
