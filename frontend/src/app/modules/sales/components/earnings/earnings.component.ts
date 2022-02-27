import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sales } from 'src/app/core/models/sales';

@Component({
  selector: 'app-earnings',
  templateUrl: './earnings.component.html',
  styleUrls: ['./earnings.component.scss'],
})
export class EarningsComponent implements OnInit {
  sales: Array<Sales> = [];
  detailSale: Array<any> = [];
  formFilter = new FormGroup({
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
    order: new FormControl(''),
  });
  date = new Date().toISOString();
  ingreso:number =0;
  egreso:number =0;
  earning:number =0;

  constructor() {}

  ngOnInit(): void {
    this.sales.push(
      {
        client: 'Cliente1',
        cost: 50,
        total: 100,
        date: '2020-01-01',
        furnitureCount: 10,
        id: 1,
      },
      {
        client: 'Cliente1',
        cost: 50,
        total: 100,
        date: '2020-01-01',
        furnitureCount: 10,
        id: 1,
      },
      {
        client: 'Cliente1',
        cost: 50,
        total: 100,
        date: '2020-01-01',
        furnitureCount: 10,
        id: 1,
      },
      {
        client: 'Cliente1',
        cost: 50,
        total: 100,
        date: '2020-01-01',
        furnitureCount: 10,
        id: 1,
      }
    );
    this.calculateEarning()
  }

  calculateEarning(){
    this.sales.forEach(e=>this.ingreso+=e.total)
    this.sales.forEach(e=>this.egreso+=e.cost)
    this.earning=this.ingreso-this.egreso
  }
  getEarnings() {

  }
}
