import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../core/models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  
  constructor(private categoryService: CategoryService) { }
  public categories: Array<Category> = [];
 

  ngOnInit(): void {
    this.getAllCategories();
  }

  private getAllCategories() {
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res
      },
      err => console.log(err)
    );
  }

  getCategoriesByName(name:string){
    this.categoryService.getAllCategories(name).subscribe(
      res => {
        this.categories = res
      },
      err => console.log(err)
    );
  }

  deleteCategory(id: any){
    console.log('Id Categoria: ',id);
    
  }

}
