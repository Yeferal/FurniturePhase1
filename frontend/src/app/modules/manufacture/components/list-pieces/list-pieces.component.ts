import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Piece } from 'src/app/core/models/piece';
import {PieceServiceService} from "../../services/piece-service.service";

@Component({
  selector: 'app-list-pieces',
  templateUrl: './list-pieces.component.html',
  styleUrls: ['./list-pieces.component.scss']
})
export class ListPiecesComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<number>();
  @Output() isEditEvent = new EventEmitter<boolean>();
  @Output() feedbackEvent = new EventEmitter<string>();

  //variables for actions
  idPiece: number;
  costPieces: number;
  searchValue: string = '';
  maxSizeRows: number = 5;
  pageNumber: number = 1;
  totalItems: number = 0;

  list: Piece [] = [];

  constructor(private pieceService: PieceServiceService) { }

  updateIsEdit(event: any){
    this.isEditEvent.emit(event);
  }

  ngOnInit(): void {
    this.searchPieces();
  }

  pageChanged(event: any){
    this.pageNumber = event;
    this.searchPieces();
  }

  setNameToSearch(event: any){
    this.searchValue = event.target.value;
    console.log("SSSSSSSSSS"+event);
    
    this.searchPieces();
  }

  searchPieces2(event:any){
    console.log("SSSSSSa"+event);
    
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

  setIdPiece(id: number){
    this.idPiece = id;
  }

  setIdPieceAndCost(id: number, cost: number){
    this.idPiece = id;
    this.costPieces=cost;
  }
  deletePiece(){
    this.pieceService.deletePiece(this.idPiece).subscribe(
      res => {
        alert(res.msj);
      },
      err => {
        alert('Ha ocurrido un error al eliminar la pieza.');
      }
    );
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

  updatePiece(piece: any){
    console.warn(piece);
  }

  searchPieces(){
    this.pieceService.getAllPieces(this.pageNumber-1,this.searchValue).subscribe(
      res => {
        this.list = res.content;
        this.totalItems = res.totalElements;
      },
      err => {
        console.log(err);
      }
    )
  }
}
