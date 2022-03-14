import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../core/models/category';
import { CategoryService } from '../../services/category.service';
import {Piece} from "../../../../core/models/piece";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: Category[] = [];
  selectedId: number = 0;


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

  deleteCategory(){
    this.categoryService.deleteCategory(this.selectedId).subscribe(
      res => {
        alert(res.msj);
      },
      err => {
        alert('Ha ocurrido un error en el servidor al intentar eliminar la categoria');
      }
    )
  }

  changeSelectedId(event: any){
    this.selectedId = event;
  }
}
