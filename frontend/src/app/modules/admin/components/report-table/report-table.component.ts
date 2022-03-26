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
<<<<<<< HEAD
  items: Array<any> = [];

  @Input() set listItems(value: Array<any>){
    if(value != undefined){
      console.log("Se ha recibido el listado:" + value);
      this.items = value;
=======
  items: Array<any> = [
    {
      value1: 'ids 1',
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
>>>>>>> 9ddc20d90c698a7d1cdf2fed338ea0d6e1b07ce5
    }
  }

  @Input() set reportType(value: number){ //Cada vez que se setee el reportType
    if(value != undefined){
      this._reportType = value;
      switch (value) {
        case 2:
          this._reportService.getReturnFurnitures()
          break;
        default:
          break;
      }
    }
  }

  constructor(private _reportService: ReportsService) { }

  ngOnInit() {
  }

}
