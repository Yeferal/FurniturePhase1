import { Component, Input, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {

  _reportType: number;
  p: number = 1;
  items: Array<any> = [];
  @Input() items2 = []
  @Input() set listItems(value: Array<any>){
    if(value != undefined){
      console.log("Se ha recibido el listado:" + value);
      this.items = value;
    }else{
      console.log('Aver: ',this.items);
      
    }
  }
  @Input() date1: string;
  @Input() date2: string; 
  @Input() set reportType(value: number){ //Cada vez que se setee el reportType
    if(value != undefined){
      this._reportType = value;
      console.log(this.date1+" "+this.date2);
     
    }
  }

  constructor(private _reportService: ReportsService) { }

  ngOnInit() {
  }

}
