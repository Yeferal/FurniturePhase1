import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Furniture } from '../../../../core/models/furniture';
import { FurnitureService } from '../../services/furniture.service';
import { DatePipe } from '@angular/common';
import { Page } from 'src/app/core/models/page';

@Component({
  selector: 'app-list-furniture',
  templateUrl: './list-furniture.component.html',
  styleUrls: ['./list-furniture.component.scss']
})
export class ListFurnitureComponent implements OnInit {

  selectedId: any = 0;
  page = 0;
  paginate: Page  = new Page();
  typeSearch:number = 0;

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
    this.getListFurniture();
    
  }

  public getListFurniture(){
    this.furnitureService.getAllFurnitureList(this.page).subscribe(
      res => {
        this.furnitures = res.content;
        this.paginate = res;
        console.log(res.content);
        
      },
      err => console.log(err)
    )
  }

  public filterFurnitures(){
    this.page = 0;
    let filter = {
      date1: this.formFilter.get("dateStart")?.value,
      date2: this.formFilter.get("dateEnd")?.value,
      sort: this.formFilter.get("order")?.value,
    }
    this.furnitureService.getAllFurnitureListFilter(this.page,filter).subscribe(
      res => {
        // console.log(res.content);
        this.paginate = res;
        console.log(this.paginate);
        
        this.furnitures = res.content;
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

  nextPage(){
    this.page = this.page + 1;
    if (this.typeSearch == 0) {
      this.getListFurniture();
    } else {
      this.filterFurnitures();
    }
  }

  prevPage(){
    this.page = this.page - 1;
    if (this.typeSearch == 0) {
      this.getListFurniture();
    } else {
      this.filterFurnitures();
    }
  }

  setPage(i: number){
    this.page = i;
    if (this.typeSearch == 0) {
      this.getListFurniture();
    } else {
      this.filterFurnitures();
    }
  }

  changeSelectedId(event: any){
    // console.log(event);
    this.selectedId = event;
  }

  updateLastActionUsed(event: any){
    switch (event) {
      case 'add':
        console.log("SSSSSSSSS");
        this.furnitureService.updateStatus(this.selectedId).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.warn(error);
            
          }
        )
        break;
      default:
        break;
    }
  }

  counter(i: number) {
    return new Array(i);
  }

}
