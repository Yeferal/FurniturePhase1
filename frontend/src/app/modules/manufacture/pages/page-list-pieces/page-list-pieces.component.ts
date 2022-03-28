import { Component, OnInit } from '@angular/core';
import { Piece } from 'src/app/core/models/piece';

@Component({
  selector: 'app-page-list-pieces',
  templateUrl: './page-list-pieces.component.html',
  styleUrls: ['./page-list-pieces.component.scss']
})
export class PageListPiecesComponent implements OnInit {

  isPieceFormModalHidden: boolean;
  isEdit: boolean;
  selectedId: number;
  PieceTmp: Piece;
  constructor() { }

  ngOnInit(): void {
    this.isPieceFormModalHidden = true;
  }

  changeSelectedId(event: any){
    this.selectedId = event;
  }

  changeIsEdit(event: any){
    this.isEdit = event;
  }

  showMessage(event: any){
    alert(event);
  }
  
}
