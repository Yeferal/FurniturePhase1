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
  furnitures: Array<Furniture> =[];
  
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {}

  ngOnChanges(): void{
    this.getFurniture();
  }

  public getFurniture(){
    this.furnitureService.getFurniture(this.id).subscribe(
      res => {
        console.log(res);
        this.furniture = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }
  
}
