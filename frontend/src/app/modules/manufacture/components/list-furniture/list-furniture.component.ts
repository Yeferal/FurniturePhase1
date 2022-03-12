import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Furniture } from '../../../../core/models/furniture';
import { FurnitureService } from '../../services/furniture.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent implements OnInit {

  selectedId: any = 0;
  page = 0;

  constructor(private furnitureService : FurnitureService
    ) { }
  public furnitures : Array<Furniture> = []
  formFilter = new FormGroup(
    {
      dateStart:new FormControl(''),
      dateEnd:new FormControl(''),
      order:new FormControl('')
    }
  );

  date = new Date().toISOString() ;  

  ngOnInit(): void {
    
    this.furnitureService.getAllFurnitureList(this.page).subscribe(
      res => {
        this.furnitures=res.content;
        console.log(res.content);
        
      },
      err => console.log(err)
    )
  }

  public filterFurnitures(){
    console.log(this.formFilter);
    
  }

  changeSelectedId(event: any){
    console.log(event);
    this.selectedId = event;
  }

  updateLastActionUsed(event: any){
    switch (event) {
      case 'add':
        console.log('Se ha actualizado el mueble con id: '+this.selectedId+' ahora está en venta');
        break;
      default:
        break;
    }
  }

}
