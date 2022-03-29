import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillDetail } from 'src/app/core/models/bill-detail';
import { Page } from 'src/app/core/models/page';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-consult-invoices',
  templateUrl: './consult-invoices.component.html',
  styleUrls: ['./consult-invoices.component.scss']
})
export class ConsultInvoicesComponent implements OnInit {

  formInvoices: FormGroup = new FormGroup({
    noInvoices: new FormControl(null, Validators.required)
  });
  
  noInvoicesError = false;
  isExistInvoices = false;
  msjError = 'La Factura no existe';
  page: number = 0;
  paginate: Page;
  listBillDetail: Array<BillDetail> = [];
  noBill: number;

  openContent = false;
  constructor(private invoicesService: InvoicesService) { }

  ngOnInit(): void {
  }

  openCont(){
    this.openContent = !this.openContent;
  }

  searchInvoices(){
    if (this.formInvoices.invalid) {
      this.noInvoicesError = true;
      return ;
    }
    let data = {
      billId: this.formInvoices.get('noInvoices')?.value,
      page: this.page
    }

    this.noBill = this.formInvoices.get('noInvoices')?.value;
    this.invoicesService.getInvoicesCliente(data).subscribe(
      res => {
        this.paginate = res;
        this.listBillDetail = this.paginate.content;
        console.log(this.listBillDetail);
        this.listBillDetail.length
        if(this.paginate.empty){
          this.isExistInvoices = true;
        }
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

  nextPage(){
    this.page = this.page + 1;
    this.getListPageBillDetails();
  }

  prevPage(){
    this.page = this.page - 1;
    this.getListPageBillDetails();
  }

  setPage(i: number){
    this.page = i;
    this.getListPageBillDetails();
  }

  counter(i: number) {
    return new Array(i);
  }

  getListPageBillDetails(){
    let data = {
      billId: this.noBill,
      page: this.page
    }
    this.invoicesService.getInvoicesCliente(data).subscribe(
      res => {
        console.log(res);
        
        this.paginate = res;
        this.listBillDetail = this.paginate.content;
        console.log(this.listBillDetail);
        this.listBillDetail.length
        if(!this.paginate.empty)
          this.noInvoicesError = true;

        
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
