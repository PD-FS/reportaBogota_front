import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories : ArrayBuffer;
  constructor( 
    public categoryService : CategoryService
    ) { }

  ngOnInit() {
  //}
  //ionViewDidLoad() {
    this.categoryService.getCategories().subscribe(
      (data) =>
      {
        this.categories = data;
        console.log(data);
      },
      (error) =>
      {
        console.error(error);
      }
    );
    console.log('ionViewDidLoad CategoriesPage');
  }

}
