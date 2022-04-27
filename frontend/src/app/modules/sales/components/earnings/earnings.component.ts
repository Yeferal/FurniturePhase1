import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sales } from 'src/app/core/models/sales';
import { SalesService } from '../../services/sales-service.service';

interface EarningsTotal {
  sales: number;
  lost: number;
  earnings: number;
}

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
  });
  date = new Date().toISOString();
  ingreso:number =0;
  egreso:number =0;
  earning:number =0;
  msjError = '';
  errorForm = false;
  earn: Array<any> = [0,0,0,0];

  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    
  }

  getEarnings() {
    // if (this.formFilter.invalid) {
    //   this.msjError = "Debe de llenar Todo los Campos"
    //   this.errorForm = true;
    //   return ;
    // }

    if (this.formFilter.get('dateStart')?.value > this.formFilter.get('dateEnd')?.value) {
      this.msjError = "El intervalo de tiempo es incorrecto"
      this.errorForm = true;
      return ;
    }
    this.errorForm = false;

    let data = {
      date1: this.formFilter.get('dateStart')?.value,
      date2: this.formFilter.get('dateEnd')?.value
    }

    this.salesService.getEarningsTotal(data).subscribe(
      res => {
        console.log(res);
        this.earn = res;
      },
      error => {
        console.warn(error);
        
      }
    );
  }
}
