import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-pieces',
  templateUrl: './page-list-pieces.component.html',
  styleUrls: ['./page-list-pieces.component.scss']
})
export class PageListPiecesComponent implements OnInit {

  isEdit: boolean;
  selectedId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeSelectedId(event: any){
    this.selectedId = event;
  }

  changeIsEdit(event: any){
    this.isEdit = event;
  }
}
