import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sales } from '../../../../core/models/sales';
import { SalesService } from '../../services/sales-service.service';

@Component({
  selector: 'app-sales-of-day',
  templateUrl: './sales-of-day.component.html',
  styleUrls: ['./sales-of-day.component.scss']
})
export class SalesOfDayComponent implements OnInit {

  constructor(private salesService: SalesService) { }
  ventasList: Array<Sales> = []
  ngOnInit(): void {
    this.ventasList.push(
      {
        client:"Cliente1",
        cost:10,
        furnitureCount:1000,
        id:1,
        total:1000,
        date:"01-01-2001"
      },
      {
        client:"Cliente1",
        cost:10,
        furnitureCount:1000,
        id:1,
        total:1000,
        date:"01-01-2001"
      },
      {
        client:"Cliente1",
        cost:10,
        furnitureCount:1000,
        id:1,
        total:1000,
        date:"01-01-2001"
      },
      {
        client:"Cliente1",
        cost:10,
        furnitureCount:1000,
        id:1,
        total:1000,
        date:"01-01-2001"
      }
    )
    
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
 
}
