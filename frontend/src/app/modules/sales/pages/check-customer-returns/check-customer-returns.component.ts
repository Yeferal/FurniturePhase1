import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillDetail } from 'src/app/core/models/bill-detail';
import { Page } from 'src/app/core/models/page';
import { BillService } from '../../services/bill.service';

@Component({
  selector: 'app-check-customer-returns',
  templateUrl: './check-customer-returns.component.html',
  styleUrls: ['./check-customer-returns.component.scss']
})
export class CheckCustomerReturnsComponent implements OnInit {

  returnCustomerForm: FormGroup = new FormGroup({
    nit: new FormControl(null, Validators.required),
    date1: new FormControl(null, Validators.required),
    date2: new FormControl(null, Validators.required)
  });

  noInvoicesError = false;
  openContent = false;
  nitClienteError = false;
  date1Error = false;
  date2Error = false;
  msjError = '';
  errorForm = false;
  paginate: Page;
  listBillDetail: Array<BillDetail> = [];
  noBill: number;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
  }

  openCont(){
    this.openContent = !this.openContent;
  }

  serchReturns(){
    this.nitClienteError = this.returnCustomerForm.get('nit')?.invalid==true;
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
    console.log(this.returnCustomerForm.value);
    
    this.billService.getReturnClient(this.returnCustomerForm.value).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.listBillDetail = this.paginate.content;
        if(this.paginate.empty){
          this.msjError = "No se encontraron Registros de Devoluciones"
          this.errorForm = true;
        }
      },
      error => {
        console.warn(error);
        
      }
    );
  }

}
