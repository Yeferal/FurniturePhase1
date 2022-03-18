import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BillDetail } from 'src/app/core/models/bill-detail';
import { Page } from 'src/app/core/models/page';
import { Sales } from '../../../../core/models/sales';
import { SalesService } from '../../services/sales-service.service';

@Component({
  selector: 'app-sales-of-day',
  templateUrl: './sales-of-day.component.html',
  styleUrls: ['./sales-of-day.component.scss']
})
export class SalesOfDayComponent implements OnInit {

  constructor(private salesService: SalesService) { }
  ventasList: Array<BillDetail> = []
  paginate: Page;

  ngOnInit(): void {
    
    /*
    this.salesService.getSalesOfNow().subscribe(
      res => {
        this.ventasList= res
        console.log(res);
        
      },
      err => console.log(err)
    )
    */
  }

  public getSalesToday(){

    this.salesService.getSalesToday({}).subscribe(
      res => {
        this.paginate = res;
        this.ventasList = this.paginate.content;
      },
      error => {
        console.warn(error);
        
      }
    );
  }
 
}
