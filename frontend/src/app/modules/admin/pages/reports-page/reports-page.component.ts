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
        console.log("22");
        
        break;
      case '2':
        
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
    
      // default:
        
      //   break;
    }
  }

  setSelected(event: any){
    this.typeReportSelected = event.target.value;
  }

  getReportSales(){
    console.log("entro", this.reportForm.value);

    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '01-01-0001',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date1')?.value : '01-01-9999'
    }
    console.log(data);
    
    
    this.reportsService.getReportSalesXPeriod(data).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportEarnings(){
    
    let data = {
      page: this.page,
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '01-01-0001',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date1')?.value : '01-01-9999'
    }
    console.log(data);
    
    
    this.reportsService.getReportEarningsXPeriod(data).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportMinFurnitureXPeriod(){
    console.log("entro ReportMinFurnitureXPeriod", this.reportForm.value);

    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '01-01-0001',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date1')?.value : '01-01-9999'
    }
    console.log(data);
    
    
    this.reportsService.getReportMinFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

  getReportMaxFurnitureXPeriod(){
    console.log("entro getReportMaxFurnitureXPeriod", this.reportForm.value);

    let data = {
      date1: this.reportForm.get('date1')?.value? this.reportForm.get('date1')?.value : '01-01-0001',
      date2: this.reportForm.get('date2')?.value? this.reportForm.get('date1')?.value : '01-01-9999'
    }
    console.log(data);
    
    
    this.reportsService.getReportMaxFurnitureXPeriod(data).subscribe(
      res => {
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
