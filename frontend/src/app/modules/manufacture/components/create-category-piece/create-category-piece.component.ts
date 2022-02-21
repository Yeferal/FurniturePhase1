import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-category-piece',
  templateUrl: './create-category-piece.component.html',
  styleUrls: ['./create-category-piece.component.scss']
})
export class CreateCategoryPieceComponent implements OnInit {

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, null),
  });

  txtAlert = "";
  txtAlertName = "Category is Exist";
  errorMsj = false;

  constructor() { }

  ngOnInit(): void {
  }

  createCategory(){
    if (this.categoryForm.invalid) {
      this.txtAlert = "Debe de completar los campos obligatorios"
      this.errorMsj = true;
      return ;
    }
    
    
  }

}
