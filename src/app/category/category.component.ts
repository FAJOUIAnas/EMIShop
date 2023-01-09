import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryService} from "../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : string[];

  constructor(private categoryService : CategoryService, private route: Router) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  onClickCategory(category: string) {
    this.route.navigate([`categoryproducts/${category}`])
  }
}
