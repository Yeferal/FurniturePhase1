import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Furniture } from 'src/app/core/models/furniture';
import { FurnitureService } from 'src/app/modules/manufacture/services/furniture.service';
import { InvoicesService } from '../../services/invoices.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  _lastAddedFurniture: Furniture;
  furnitures: Array<Furniture> = [];
  @Input() client: Client;
  @Input() furnituresOnSaleModalId: string;
  @Input() set lastAddedFurniture(value: Furniture) {
    if(value != undefined){
      this._lastAddedFurniture = value;
      this.addFurniture(this._lastAddedFurniture);
    }
  }
  @Output() setLastFurniture = new EventEmitter<Furniture>();

  constructor(private invoiceService: InvoicesService, private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.searchFurnituresOnSession();
  }

  addFurniture(furniture: Furniture){
    if(this.existFurniture(furniture)){
      alert("Ya agregó este mueble a la factura, no puede agregarlo de nuevo");
    }else{
      this.furnitureService.registerFurnitureOnSession(furniture).subscribe(
        (response: any) => {
          if(response.wasAdded) this.furnitures.push(furniture);
          alert("Se agregado correctamente a la factura");
        },
        (err: any) => {
          console.error(err);
        }
      );
    }
  }

  existFurniture(furniture: Furniture){
    let value = false;
    this.furnitures.forEach((tmp: Furniture) => {
      if(tmp.code == furniture.code){
        value = true;
      }
    });
    return value;
  }

  removeFurniture(id: number){
    for(let i = 0; i < this.furnitures.length; i++){
      console.log(this.furnitures[i].code+"---"+id);
      if(this.furnitures[i].code == id) {
        this.furnitureService.deleteFurnitureOnSession(this.furnitures[i].code).subscribe(
          (response: any) => {
            if(response.wasDeleted){
              this.furnitures.splice(i,1);
            }
          },
          (err: any) => {
            console.error(err);
          }
        );
        break;
      }
    }
  }

  doInvoice(){
    if(this.client!=undefined){
      if(this.client.id!=undefined && this.client.name!=undefined && this.client.address!=undefined){
        if(this.client.name ==="" || this.client.address===""){
          alert("Cliente no valido");
        }else{
          const data = {
            bill: {
              total: this.getTotal(),
              client: this.client
            },
            details: this.transformFurnitures()
          }
          this.invoiceService.registerSale(data).subscribe(
            res => {
              console.log(res);
              alert("Se ha realizado la venta correctamente");
              this.furnitures = []
            },
            err => {
              console.log(err);
            }
          )
        }
      }else{
        alert("Cliente no valido");
      }
    }else{
      alert("Cliente no valido (indefinido)");
    }
  }

  cancelInvoice(){
    this.furnitureService.deleteAllFurnituresOnSession().subscribe(
      response => {
        this.furnitures = [];
        alert("Se ha cancelado la venta exitosamente");
      },
      err => {
        console.log(err);
      }
    );
  }

  getTotal(): any{
    let total = 0;
    this.furnitures.forEach(furniture =>{
      total+=furniture.price;
    });
    return total;
  }

  transformFurnitures(): any{
    let newFurnitures:any = [];
    this.furnitures.forEach(furniture => {
      newFurnitures.push({
        furniture: { code: furniture.code },
        priceSale: furniture.price,
        costLost: 0
      });
    });
    return newFurnitures;
  }

  searchFurnituresOnSession():any{
    this.furnitureService.getFurnituresOnSession().subscribe(
      (response: any)=>{
        console.warn(response);
        response.forEach((furnitureInBill:any) => {
          console.error(furnitureInBill.furniture);
          this.furnitures.push(furnitureInBill.furniture)
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
