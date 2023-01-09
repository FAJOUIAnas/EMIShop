import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';
import { ListProductCategoryComponent } from './list-product-category/list-product-category.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path : '', component : ListProductsComponent},
  {path : 'details/:id', component : ProductDetailsComponent},
  {path : 'authentification', component : AuthComponent},
  {path : 'categories', component : CategoryComponent},
  {path : 'categoryproducts/:category', component : ListProductCategoryComponent},
  {path : 'inscription', component : InscriptionComponent},
  {path : 'cart', component : CartComponent}
]

@NgModule({
  declarations: [   //list de composants
    AppComponent, ListProductsComponent, ProductItemComponent, CartComponent, NavbarComponent, ProductDetailsComponent, AuthComponent, CategoryComponent, ListProductCategoryComponent, InscriptionComponent
  ],
  imports: [        //list des modules
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],    //service
  bootstrap: [AppComponent]   //composant lancé au demarrage
})
export class AppModule {}
