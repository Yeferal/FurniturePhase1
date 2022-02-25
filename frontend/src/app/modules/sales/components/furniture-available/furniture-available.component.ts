import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/modules/manufacture/models/furniture';
import { FurnitureService } from 'src/app/modules/manufacture/services/furniture.service';

@Component({
  selector: 'app-furniture-available',
  templateUrl: './furniture-available.component.html',
  styleUrls: ['./furniture-available.component.scss']
})
export class FurnitureAvailableComponent implements OnInit {

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.furnitureService.getAvailableFurniture('').subscribe(
      res => {
        this.furnitureList= res
      },
      err => console.log(err)
    )
  }

  furnitureList: Array<Furniture> = []

  FilterFurnitures (filter:string){

  }
}
