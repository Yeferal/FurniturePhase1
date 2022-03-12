import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Furniture } from 'src/app/core/models/furniture';
import { Sales } from '../../../../core/models/sales';

@Component({
  selector: 'app-sales-by-client',
  templateUrl: './sales-by-client.component.html',
  styleUrls: ['./sales-by-client.component.scss']
})
export class SalesByClientComponent implements OnInit {
  sales:Array<Sales> = []
  detailSale:Array<Furniture> = []
  formFilter = new FormGroup(
    {
      dateStart:new FormControl(''),
      dateEnd:new FormControl(''),
      order:new FormControl('')
    }
  );

  date = new Date().toISOString() ;  
  constructor() { }

  ngOnInit(): void {
    
  }

  getSalesByClient(){
   
    
    this.sales.push(
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
  }

  getDetail(id:number){
    this.detailSale.push(
      // {
      //   id:1,
      //   cost:10,
      //   description:"s",
      //   inSale:false,
      //   price:10,
      //   title:"mueble 1"
      // },
      // {
      //   id:1,
      //   cost:10,
      //   description:"s",
      //   inSale:false,
      //   price:10,
      //   title:"mueble 2"
      // }
    )
  }
}
