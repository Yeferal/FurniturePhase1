import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  furnitures: Array<{id: number, description: string}>;
  constructor() { }

  ngOnInit(): void {
  }

  addFurniture(id: number, description: string){
    this.furnitures.push({id: id,description: description});
  }

  removeFurniture(id: number){
    for(let i = 0; i < this.furnitures.length; i++){
      if(this.furnitures[i].id == id) this.furnitures.splice(i,1);
    }
  }

  doInvoice(){
    console.log('-------------------------------------------------------')
    console.log('Se ha generado una factura con los siguientes muebles: ');
    console.log({'furnitures in invoice': this.furnitures});
    console.log('-------------------------------------------------------')
  }
}
