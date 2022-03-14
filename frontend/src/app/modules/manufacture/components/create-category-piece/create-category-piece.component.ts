import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-create-category-piece',
  templateUrl: './create-category-piece.component.html',
  styleUrls: ['./create-category-piece.component.scss']
})
export class CreateCategoryPieceComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required)
  });

  txtAlert = "";
  txtAlertName = "Category is Exist";
  errorMsj = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  createCategory(){
    if (this.categoryForm.invalid) {
      this.txtAlert = "Debe de completar los campos obligatorios"
      this.errorMsj = true;
      return ;
    }else{
      this.categoryService.saveCategory(
        {
          name:this.categoryForm.value.name
        }
      ).subscribe(res=>{
        this.categoryForm.reset();
        console.log(res);
      },err=>{
        console.warn(err);
      })
    }
  }

}
