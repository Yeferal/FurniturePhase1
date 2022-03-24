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
  paginate: Page = new Page();
  page = 0;

  ngOnInit(): void {
    this.getSalesToday();
    
  }

  public getSalesToday(){

    this.salesService.getSalesToday(this.page).subscribe(
      res => {
        this.paginate = res;
        this.ventasList = this.paginate.content;
        console.log(this.paginate);
        
      },
      error => {
        console.warn(error);
        
      }
    );
  }
 
  nextPage(){
    this.page = this.page + 1;
    this.getSalesToday();
  }

  prevPage(){
    this.page = this.page - 1;
    this.getSalesToday();
  }

  setPage(i: number){
    this.page = i;
    this.getSalesToday();
  }
  counter(i: number) {
    return new Array(i);
  }



}
