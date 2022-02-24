import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ventas } from '../../models/ventas';
import { SalesService } from '../../services/sales-service.service';

@Component({
  selector: 'app-sales-of-day',
  templateUrl: './sales-of-day.component.html',
  styleUrls: ['./sales-of-day.component.scss']
})
export class SalesOfDayComponent implements OnInit {

  constructor(private salesService: SalesService) { }
  ventasList: Array<ventas> = []
  ngOnInit(): void {
    this.salesService.getSalesOfNow().subscribe(
      res => {
        this.ventasList= res
        console.log(res);
        
      },
      err => console.log(err)
    )
  }
 
}
