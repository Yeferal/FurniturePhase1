import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {

  _reportType: number;
  p: number = 1;
  items: Array<any> = [];

  @Input() set listItems(value: Array<any>){
    if(value != undefined){
      console.log("Se ha recibido el listado:" + value);
      this.items = value;
    }
  }

  @Input() set reportType(value: number){ //Cada vez que se setee el reportType
    if(value != undefined){
      console.log("Se ha recibido el valor:" + value);
      this._reportType = value;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
