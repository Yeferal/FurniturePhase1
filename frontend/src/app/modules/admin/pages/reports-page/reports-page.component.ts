import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {

  reportForm: FormGroup = new FormGroup({
    date1: new FormControl(),
    date2: new FormControl()
  });

  page: number = 0;

  typeReportSelected: number;
  items: Array<any> = [];

  formFilter = new FormGroup(
    {
      dateStart:new FormControl(),
      dateEnd:new FormControl(),
      name:new FormControl()
    }
  );

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  getReport(){
    console.log("entro", this.typeReportSelected);
    switch (this.typeReportSelected+"") {
      case '0':
        break;
      case '1':
        this.getReportSales();
        break;
      case '2':
        this.getReturnFurnitures()
        break;
      case '3':
        this.getReportEarnings();
        break;
      case '4':
        this.getReportMaxFurnitureXPeriod();
        break;
      case '5':
        this.getReportMinFurnitureXPeriod();
        break;
      case '6':
        this.getReportBestSellerXPeriod();
        break;
      case '7':
        this.getReportBestEarnerXPeriod();
        break;
    }
  }

  export(){

  }
  
  listDevolutions = []
  getReturnFurnitures(){
      let   page = this.page
      let date1 = this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01'
      let date2 =  this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
      this.reportsService.getReturnFurnitures(page,date1,date2).subscribe(
        res => {
          console.log(res);
          this.listDevolutions = res
        },
        err => console.log(err)
      )
  }

  setSelected(event: any){
    this.typeReportSelected = event.target.value;
    this.listDevolutions = [];
    this.items = [];
  }

  getReportSales(){
    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportSalesXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res.content;
        
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportEarnings(){
    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportEarningsXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res.content;
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportMinFurnitureXPeriod(){

    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportMinFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportMaxFurnitureXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportMaxFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportBestSellerXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportBestSellerXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportBestEarnerXPeriod(){
    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '0001-01-01',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date2')?.value : '9999-01-01'
    }
    console.log(data);
    
    
    this.reportsService.getReportBestEarnerXPeriod(data).subscribe(
      res => {
        console.log(res);
        this.items = res;
        console.log(this.items);
      },
      error => {
        console.log(error);
        
      }
    );
  }
}
