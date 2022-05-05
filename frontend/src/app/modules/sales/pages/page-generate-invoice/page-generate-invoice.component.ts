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

  furnituresOnSale: Array<Furniture> = [];
  lastAddedFurniture: Furniture;
  client: Client;
  searchValue: string ="";
  maxSizeRows: number = 5;
  pageNumber: number = 1;
  totalItems: number = 0;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.searchFurnitures();
  }

  addFurnitureToInvoice(event: any){
    let index = 0;
    for(let i = 0; i < this.furnituresOnSale.length; i++){
      if(this.furnituresOnSale[i].code == event){
        index = i;
        break;
      }
    }
    this.furnitureService.existsFurnitureOnSession(this.furnituresOnSale[index].code).subscribe(
      response =>{
        if(response){
          this.lastAddedFurniture = this.furnituresOnSale[index];
        }else{
          alert("Ya agregó este mueble a la factura, no puede agregarlo de nuevo");
        }
      },
      err =>{
        alert("Ha ocurrido un error al intentar agregar el mueble a la factura");
      }
    );
  }

  setLastFurniture(event: any){
    this.lastAddedFurniture = new Furniture();
  }

  updateClient(event: any){
    this.client = event;
  }

  pageChanged(event: any){
    this.pageNumber = event;
    this.searchFurnitures();
  }

  setNameToSearch(event: any){
    this.searchValue = event.target.value;
    this.searchFurnitures();
  }
  
  searchFurnitures(){
    this.furnitureService.getFurnituresOnSale(this.searchValue,this.pageNumber-1).subscribe(
      (response: any)=>{
        this.furnituresOnSale = response.content;
        this.totalItems = response.totalElements;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
