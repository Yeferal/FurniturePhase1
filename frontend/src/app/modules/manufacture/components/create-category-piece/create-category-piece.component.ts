import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
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
  showMessage:number = 0;
  message:string ="";
  @Output() Cat = new EventEmitter<Category>();

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
        this.showMessage=1;
        this.Cat.emit(res)
        this.message="Categoria creada correctamente";
      },err=>{
        this.showMessage=2;
        this.message="Error al crear categoria, intente de nuevo";
      })
    }
  }

}
