import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Response} from "../modules/Response";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http : HttpClient) { }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>("https://dummyjson.com/products/categories");
  }

}
