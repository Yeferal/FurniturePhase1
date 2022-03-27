import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit {

  typeReportSelected: number;

  formFilter = new FormGroup(
    {
      dateStart:new FormControl(''),
      dateEnd:new FormControl(''),
      name:new FormControl('')
    }
  );
  constructor() { }

  ngOnInit() {
  }

  setSelected(event: any){
    this.typeReportSelected = event.target.value;
  }
}
