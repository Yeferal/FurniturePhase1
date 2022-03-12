import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Furniture } from 'src/app/core/models/furniture';
import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-furniture-information',
  templateUrl: './furniture-information.component.html',
  styleUrls: ['./furniture-information.component.scss']
})
export class FurnitureInformationComponent implements OnInit {

  @Input() id: number;
  furniture: Furniture;
  furnitures: Array<Furniture> =[
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
    //   "inSale": false
    // },
    // {
    //   "id": 3,
    //   "title": "Mesa aturdidora",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 200,
    //   "cost": 154,
    //   "inSale": false
    // },
    // {
    //   "id": 4,
    //   "title": "Mesa sábatica",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 100,
    //   "cost": 105,
    //   "inSale": false
    // },
    // {
    //   "id": 5,
    //   "title": "Mesaita que aplaude",
    //   "description": "Descripcion cualquiera -> ABCDEFGH",
    //   "price": 170,
    //   "cost": 125,
    //   "inSale": false
    // }
  ];
  
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {}

  ngOnChanges(): void{
    for(let i = 0; i < this.furnitures.length; i++){
      if(this.furnitures[i].id == this.id){
        this.furniture = this.furnitures[i];
        break;
      }
    }
    /* this.furnitureService.getFurniture(this.id).subscribe(
      (response)=>{
        this.furniture = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );*/
  }
  
}
