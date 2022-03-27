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

  @Input() set listItems(value: Array<any>){
    if(value != undefined){
      console.log("Se ha recibido el listado:" + value);
      this.items = value;
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
