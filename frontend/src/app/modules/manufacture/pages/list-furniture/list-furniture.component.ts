import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Furniture } from '../../models/furniture';
import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent implements OnInit {
  constructor(private furnitureService : FurnitureService) { }
  public furnitures : Array<Furniture> = []
  formFilter = new FormGroup(
    {
      dateStart:new FormControl(''),
      dateEnd:new FormControl(''),
      order:new FormControl('')
    }
  );
  ngOnInit(): void {
    this.furnitureService.getAllFurnitures().subscribe(
      res => {
        this.furnitures=res
        
      },
      err => console.log(err)
    )
  }

  public filterFurnitures(){
    console.log(this.formFilter);
    
  }

}
