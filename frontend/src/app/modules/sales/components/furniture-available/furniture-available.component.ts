import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Furniture } from 'src/app/core/models/furniture';
import { FurnitureService } from 'src/app/modules/manufacture/services/furniture.service';

@Component({
  selector: 'app-furniture-available',
  templateUrl: './furniture-available.component.html',
  styleUrls: ['./furniture-available.component.scss']
})
export class FurnitureAvailableComponent implements OnInit {

  constructor(private furnitureService: FurnitureService) { }

  idFurniture: number;
  searchValue: string ="";
  maxSizeRows: number = 5;
  pageNumber: number = 1;
  totalItems: number = 0;
  minimalCost: number = 0;
  furnitureList: Array<Furniture> = []
  @ViewChild('closePutOnSaleModalButton') closePutOnSaleModalButton: ElementRef;

  formPutOnSale = new FormGroup(
    {
      price: new FormControl('',[
        Validators.pattern('[0-9]+'),
        Validators.required,
        Validators.min(this.minimalCost)
      ])
    }
  )

  ngOnInit(): void {
    this.searchFurnitures();
  }

  searchFurnitures(){
    this.furnitureService.getFurnituresOnStorage(this.searchValue, this.pageNumber-1).subscribe(
      (res:any) => {
        this.furnitureList = res.content
      },
      err => console.log(err)
    )
  }

  changeSelectedId(event: any){
    this.idFurniture = event
    this.setMinimalCost();
    this.formPutOnSale.reset();
  }

  pageChanged(event: any){
    this.pageNumber = event;
    this.searchFurnitures();
  }

  setNameToSearch(event: any){
    this.searchValue = event.target.value;
    this.searchFurnitures();
  }

  setMinimalCost(){
    this.furnitureList.forEach(furniture => {
      if(furniture.code == this.idFurniture){
        this.minimalCost = furniture.cost;
      }
    });
  }

  putOnSale(){
    const data = {
      code: this.idFurniture,
      price: this.formPutOnSale.value.price
    }
    this.furnitureService.putOnSale(data).subscribe(
      (res:any)=>{
        this.closePutOnSaleModalButton.nativeElement.click();
        alert("El mueble seleccionado se ha colocado en venta correctamente");
        this.searchFurnitures();
      },
      (err:any)=>{
        alert("Ha ocurrido un error en el servidor al intentar colocar en venta este mueble");
      }
    )
  }
}
