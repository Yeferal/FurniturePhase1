import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {

  @Input() _reportType: number;
  p: number = 1;
  items: Array<any> = [
    {
      value1: 'id 1',
      value2: 'valor 2',
      value3: 'valor 3',
      value4: 'valor 4',
      value5: 'valor 5',
      value6: 'valor 6'
    },{
      value1: 'id 1',
      value2: 'valor 2',
      value3: 'valor 3',
      value4: 'valor 4',
      value5: 'valor 5',
      value6: 'valor 6'
    },{
      value1: 'id 1',
      value2: 'valor 2',
      value3: 'valor 3',
      value4: 'valor 4',
      value5: 'valor 5',
      value6: 'valor 6'
    },{
      value1: 'id 1',
      value2: 'valor 2',
      value3: 'valor 3',
      value4: 'valor 4',
      value5: 'valor 5',
      value6: 'valor 6'
    },{
      value1: 'id 1',
      value2: 'valor 2',
      value3: 'valor 3',
      value4: 'valor 4',
      value5: 'valor 5',
      value6: 'valor 6'
    }
  ];
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
