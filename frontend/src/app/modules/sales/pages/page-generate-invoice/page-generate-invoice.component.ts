import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Furniture } from 'src/app/core/models/furniture';
import { FurnitureService } from 'src/app/modules/manufacture/services/furniture.service';

@Component({
  selector: 'app-page-generate-invoice',
  templateUrl: './page-generate-invoice.component.html',
  styleUrls: ['./page-generate-invoice.component.scss']
})
export class PageGenerateInvoiceComponent implements OnInit {

  furnituresOnSale: Array<Furniture> = [
    // {
    //   "id": 1,
    //   "title": "Mesa rustica",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 150,
    //   "cost": 125,
    //   "inSale": true
    // },
    // {
    //   "id": 2,
    //   "title": "Mesa plastica",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 170,
    //   "cost": 130,
    //   "inSale": true
    // },
    // {
    //   "id": 3,
    //   "title": "Mesa aturdidora",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 200,
    //   "cost": 154,
    //   "inSale": true
    // },
    // {
    //   "id": 4,
    //   "title": "Mesa sábatica",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 100,
    //   "cost": 105,
    //   "inSale": true
    // },
    // {
    //   "id": 5,
    //   "title": "Mesaita que aplaude",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 170,
    //   "cost": 125,
    //   "inSale": true
    // }
  ];
  lastAddedFurniture: Furniture;
  client: Client;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    /* this.furnitureService.getFurnituresOnSale().subscribe(
      (response)=>{
        this.furnituresOnSale = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );*/
  }

  addFurnitureToInvoice(event: any){
    for(let i = 0; i < this.furnituresOnSale.length; i++){
      if(this.furnituresOnSale[i].id == event){
        this.lastAddedFurniture = this.furnituresOnSale[i];
        this.furnituresOnSale.splice(i,1);
        break;
      }
    }
  }

  addFurnitureOnSale(event: any){
    this.furnituresOnSale.push(event);
    this.furnituresOnSale.sort((a,b) => a.id - b.id );
  }

  updateClient(event: any){
    this.client = event;
  }
  
}
