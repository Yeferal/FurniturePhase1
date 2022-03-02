import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {

  _reportType: number;
  p: number = 1;
  items: Array<any> = [
    {
      value1: 'id 1',
      value2: 'valor 1',
      value3: 'valor 1',
      value4: 'valor 1',
      value5: 'valor 1',
      value6: 'valor 1'
    },{
      value1: 'id 2',
      value2: 'valor 2',
      value3: 'valor 2',
      value4: 'valor 2',
      value5: 'valor 2',
      value6: 'valor 2'
    },{
      value1: 'id 3',
      value2: 'valor 3',
      value3: 'valor 3',
      value4: 'valor 3',
      value5: 'valor 3',
      value6: 'valor 3'
    },{
      value1: 'id 4',
      value2: 'valor 4',
      value3: 'valor 4',
      value4: 'valor 4',
      value5: 'valor 4',
      value6: 'valor 4'
    },{
      value1: 'id 5',
      value2: 'valor 5',
      value3: 'valor 5',
      value4: 'valor 5',
      value5: 'valor 5',
      value6: 'valor 5'
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
