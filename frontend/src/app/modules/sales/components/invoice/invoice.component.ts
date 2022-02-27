import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Furniture } from 'src/app/core/models/furniture';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  _lastAddedFurniture: Furniture;
  furnitures: Array<Furniture>;
  @Input() client: Client;
  @Input() furnituresOnSaleModalId: string;
  @Input() set lastAddedFurniture(value: Furniture) {
    if(value != undefined){
      this._lastAddedFurniture = value;
      this.addFurniture(this._lastAddedFurniture);
    }
  }
  @Output() removeFurnitureEvent = new EventEmitter<Furniture>();

  constructor() { }

  ngOnInit(): void {
    this.furnitures = []
  }

  addFurniture(furniture: Furniture){
    this.furnitures.push(furniture);
  }

  removeFurniture(id: number){
    for(let i = 0; i < this.furnitures.length; i++){
      if(this.furnitures[i].id == id) {
        this.removeFurnitureEvent.emit(this.furnitures[i]);
        this.furnitures.splice(i,1);
        break;
      }
    }
  }

  doInvoice(){
    console.log('-------------------------------------------------------')
    console.log('Se ha generado una factura con los siguientes muebles: ');
    console.log({'Furnitures in invoice': this.furnitures,'Client': this.client});
    console.log('-------------------------------------------------------')
  }
}
