import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';
import { Piece } from 'src/app/core/models/piece';

@Component({
  selector: 'app-list-pieces',
  templateUrl: './list-pieces.component.html',
  styleUrls: ['./list-pieces.component.scss']
})
export class ListPiecesComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();
  @Output() isEditEvent = new EventEmitter<boolean>();
  @Output() feedbackEvent = new EventEmitter<string>();

  searchValue: string = '';
  maxSizeRows: number = 10;
  p: number = 1;
  rowsNumForm = new FormControl(10,Validators.required);

  list: Piece [] = [
    {
      id:1,
      name: "Piezas1",
      price: 5,
      amount: 5,
      cost:2
    }
  ];

  constructor() { }

  updateIsEdit(event: any){
    this.isEditEvent.emit(event);
  }

  ngOnInit(): void {
    this.setNumRows();
  }

  setNumRows(){
    if(this.rowsNumForm.value == 'all'){
      this.maxSizeRows = this.list.length;
    }else {
      this.maxSizeRows = this.rowsNumForm.value;
    }
    
  }

  pageChanged(event: any){

  }

  //declarations of forms and the validators which are used
  formRemove = new FormGroup(
    {
      totalRemove:new FormControl('0',[
        Validators.required,Validators.pattern('[0-9]+')
      ]),
    }
  );

  formProvide = new FormGroup(
    {
      totalProvide:new FormControl('',[
        Validators.pattern('[0-9]+'),
        Validators.required,
        Validators.min(0)
      ]),
      cost:new FormControl('',[
        Validators.min(0),
        Validators.pattern('[0-9]+($|.[0-9]+)'),
        Validators.required,
      ])
    }
  )

  //variables for actions
  idPiece: number;
  costPieces: number
  setIdPiece(id: number){
    this.idPiece = id;
  }

  setIdPieceAndCost(id: number, cost: number){
    this.idPiece = id;
    this.costPieces=cost;
  }
  deletePiece(){
    console.log(this.idPiece);
  }

  removePieces(){
    console.log(this.idPiece)
  }

  providePieces(){
    
  }

  changeSelectedId(event: any){
    this.messageEvent.emit(event);
  }

  sendFeedback(event: any){
    this.feedbackEvent.emit(event);
  }
}
