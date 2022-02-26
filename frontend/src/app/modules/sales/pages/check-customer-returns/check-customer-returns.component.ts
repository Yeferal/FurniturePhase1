import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-check-customer-returns',
  templateUrl: './check-customer-returns.component.html',
  styleUrls: ['./check-customer-returns.component.scss']
})
export class CheckCustomerReturnsComponent implements OnInit {

  returnCustomerForm: FormGroup = new FormGroup({
    nitCliente: new FormControl(null, Validators.required),
    date1: new FormControl(null, Validators.required),
    date2: new FormControl(null, Validators.required)
  });

  openContent = false;
  nitClienteError = false;
  date1Error = false;
  date2Error = false;
  msjError = '';
  errorForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCont(){
    this.openContent = !this.openContent;
  }

  serchReturns(){
    this.nitClienteError = this.returnCustomerForm.get('nitCliente')?.invalid==true;
    this.date1Error = this.returnCustomerForm.get('date1')?.invalid==true;
    this.date2Error = this.returnCustomerForm.get('date2')?.invalid==true;
    if (this.returnCustomerForm.invalid) {
      this.msjError = "Debe de llenar Todo los Campos"
      this.errorForm = true;
      return ;
    }

    if (this.returnCustomerForm.get('date1')?.value > this.returnCustomerForm.get('date2')?.value) {
      this.msjError = "El intervalo de tiempo es incorrecto"
      this.errorForm = true;
      return ;
    }

    this.errorForm = false;
    // this.returnCustomerForm.reset();
  }

}
