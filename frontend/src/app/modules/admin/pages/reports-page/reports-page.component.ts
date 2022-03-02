import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {

  typeReportSelected: number;
  constructor() { }

  ngOnInit() {
  }

  setSelected(event: any){
    console.log(this.typeReportSelected);
    this.typeReportSelected = event.target.value;
  }
}
