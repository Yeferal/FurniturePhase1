import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-furniture-return',
  templateUrl: './register-furniture-return.component.html',
  styleUrls: ['./register-furniture-return.component.scss']
})
export class RegisterFurnitureReturnComponent implements OnInit {

  openContent = false;
  invoiceForm: FormGroup = new FormGroup({
    noInvoice: new FormControl(null, Validators.required)
  });
  selectedId: any = 1;
  isExistInvoice = false;
  aprovedReturn = false;
  desaprovedReturn = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCont(){
    this.openContent = !this.openContent;
  }

  buscarFactura(){
    if (this.invoiceForm.invalid) {
      return ;
    }
    this.aprovedReturn = true;

  }

}
