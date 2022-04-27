import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bill } from 'src/app/core/models/bill';
import { BillDetail } from 'src/app/core/models/bill-detail';
import { Furniture } from 'src/app/core/models/furniture';
import { Page } from 'src/app/core/models/page';
import { Sales } from '../../../../core/models/sales';
import { BillService } from '../../services/bill.service';
import { SalesService } from '../../services/sales-service.service';

@Component({
  selector: 'app-sales-by-client',
  templateUrl: './sales-by-client.component.html',
  styleUrls: ['./sales-by-client.component.scss']
})
export class SalesByClientComponent implements OnInit {
  sales:Array<Bill> = []
  detailSale:Array<Furniture> = []
  formFilter = new FormGroup(
    {
      dateStart:new FormControl('', Validators.required),
      dateEnd:new FormControl(''),
      name:new FormControl('')
    }
  );
  paginate: Page;
  paginateD: Page;
  listBillDetail: Array<BillDetail> = [];
  noBill: number;
  page = 0;
  pageD = 0;
  dateTmp1: Date;
  dateTmp2: Date;
  nitTmp: number;
  idBill: number = 0;

  noInvoicesError = false;
  openContent = false;
  nitClienteError = false;
  date1Error = false;
  date2Error = false;
  msjError = '';
  errorForm = false;

  date = new Date().toISOString() ;  
  constructor(private billService: BillService, private salesService: SalesService) { }

  ngOnInit(): void {
    this.getSales();
  }

  getSalesByClient(){
    
    if (this.formFilter.invalid) {
      this.msjError = "Debe de llenar Todo los Campos"
      this.errorForm = true;
      return ;
    }

    if (this.formFilter.get('dateStart')?.value > this.formFilter.get('dateEnd')?.value) {
      this.msjError = "El intervalo de tiempo es incorrecto"
      this.errorForm = true;
      return ;
    }
    this.dateTmp1 = this.formFilter.get('dateStart')?.value;
    this.dateTmp2 = this.formFilter.get('dateEnd')?.value;
    this.nitTmp = this.formFilter.get('name')?.value;
    this.errorForm = false;

    let data = {
      page: this.page,
      date1: this.formFilter.get('dateStart')?.value,
      date2: this.formFilter.get('dateEnd')?.value,
      client: this.formFilter.get('name')?.value
    }
    console.log(data);
    
    this.salesService. getSalesClient(data).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.sales = this.paginate.content
      },
      error => {
        console.warn(error);
        
      }
    );

  }

  getSales(){
    let data = {
      page: this.page,
      date1: '0001-01-01',
      date2: new Date().toISOString(),
      client: '',
    }

    console.log(data);
    

    this.salesService. getSalesClient(data).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.sales = this.paginate.content
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  getDetail(id: number){
    this.pageD = 0;
    this.idBill = id;
    let data = {
      page: this.pageD,
      billId: id
    }
    this.salesService.getBillDetailsClient(data).subscribe(
      res => {
        this.listBillDetail = res.content;
        this.paginateD = res;
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  nextPage(){
    this.page = this.page + 1;
    let data = {
      page: this.page,
      date1: this.dateTmp1,
      date2: this.dateTmp2,
      client: this.nitTmp
    }
    
    this.salesService. getSalesClient(data).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.sales = this.paginate.content
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  prevPage(){
    this.page = this.page - 1;
    let data = {
      page: this.page,
      date1: this.dateTmp1,
      date2: this.dateTmp2,
      client: this.nitTmp
    }
    
    this.salesService. getSalesClient(data).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.sales = this.paginate.content
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  setPage(i: number){
    this.page = i;
    let data = {
      page: this.page,
      date1: this.dateTmp1,
      date2: this.dateTmp2,
      client: this.nitTmp
    }
    
    this.salesService. getSalesClient(data).subscribe(
      res => {
        console.log(res);
        this.paginate = res;
        this.sales = this.paginate.content
      },
      error => {
        console.warn(error);
        
      }
    );
  }
  counter(i: number) {
    return new Array(i);
  }




  nextPageDetail(){
    this.page = this.page + 1;
    let data = {
      page: this.pageD,
      billId: this.idBill
    }
    this.salesService.getBillDetailsClient(data).subscribe(
      res => {
        this.listBillDetail = res.content;
        this.paginateD = res;
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  prevPageDetail(){
    this.page = this.page - 1;
    let data = {
      page: this.pageD,
      billId: this.idBill
      
    }
    this.salesService.getBillDetailsClient(data).subscribe(
      res => {
        this.listBillDetail = res.content;
        this.paginateD = res;
      },
      error => {
        console.warn(error);
        
      }
    );
  }

  setPageDetail(i: number){
    this.page = i;
    let data = {
      page: this.pageD,
      billId: this.idBill
    }
    this.salesService.getBillDetailsClient(data).subscribe(
      res => {
        this.listBillDetail = res.content;
        this.paginateD = res;
      },
      error => {
        console.warn(error);
        
      }
    );
  }
  counterDetail(i: number) {
    return new Array(i);
  }

}
