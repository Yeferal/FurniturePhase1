import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { Piece } from '../../../../core/models/piece';
import { CategoryService } from '../../services/category.service';
import { PieceServiceService } from '../../services/piece-service.service';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent implements OnInit, OnChanges {

  piece: Piece;
  pieces: Array<Piece> = [
    {
      id: 1,
      name: 'pieza1',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 2,
      name: 'pieza2',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 3,
      name: 'pieza3',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 4,
      name: 'pieza4',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 5,
      name: 'pieza5',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 6,
      name: 'pieza6',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 7,
      name: 'pieza7',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 8,
      name: 'pieza8',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 9,
      name: 'pieza9',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 10,
      name: 'pieza10',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 11,
      name: 'pieza11',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
    {
      id: 12,
      name: 'pieza12',
      cost: 100.25,
      category: 'plancha',
      amount: 50
    },
  ];
  @Output() feedbackEvent = new EventEmitter<string>();
  @Output() closePieceFormModalEvent = new EventEmitter<boolean>();
  @Input() selectedId: number;
  @Input() isEdit: boolean;

  pieceForm = new FormGroup({
    pieceName: new FormControl('',[
      Validators.required
    ]),
    pieceCategory: new FormControl('',[
      Validators.required
    ]),
    pieceAmount: new FormControl('',[
      Validators.required,
      Validators.min(0),
      Validators.pattern('[0-9]+')
    ]),
    piecePrice:new FormControl('',[
      Validators.min(0),
      Validators.pattern('[0-9]+($|.[0-9]+)'),
      Validators.required,
    ]),
    pieceCost:new FormControl('',[
      Validators.min(0),
      Validators.pattern('[0-9]+($|.[0-9]+)'),
      Validators.required,
    ])
  });

  constructor(private pieceService: PieceServiceService,private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      res => {
        this.categories = res
      },
      err => console.log(err)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isEdit){
      this.pieceForm.reset();
    }else{
      for(let i = 0; i < this.pieces.length; i++){
        if(this.pieces[i].id == this.selectedId){
          this.piece = this.pieces[i];
          break;
        }
      }
      /* this.pieceService.getPiece(this.selectedId).subscribe(
        (response)=>{
          this.piece = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );*/
    }
  }

  doChanges() {
    if(this.isEdit){
      this.pieceService.saveUpdate({
        id: this.selectedId,
        name: this.pieceForm.value.pieceName,
        price: this.pieceForm.value.piecePrice,
        cost: this.pieceForm.value.pieceCost,
        stock: this.pieceForm.value.pieceAmount,
        category:{
          id:this.pieceForm.value.pieceCategory
        }
      }).subscribe(
        res =>{
          console.log(res);
          this.sendFeedback(res.msj?res.msj:'');
        },
        err =>{
          console.log(err);
          this.sendFeedback('Error al registrar pieza, intente de nuevo');
        }
      );
    }else{
      this.pieceService.savePiece({
        name: this.pieceForm.value.pieceName,
        price: this.pieceForm.value.piecePrice,
        cost: this.pieceForm.value.pieceCost,
        stock: this.pieceForm.value.pieceAmount,
        category:{
          id:this.pieceForm.value.pieceCategory
        }
      }).subscribe(
        res =>{
          console.log(res);
          this.sendFeedback(res.msj?res.msj:'');
        },
        err =>{
          console.log(err);
          this.sendFeedback('Error al registrar pieza, intente de nuevo');
        }
      );

    }
  }

  public categories: Array<Category> = [];

  sendFeedback(msg: string): void {
    this.feedbackEvent.emit(msg);
  }

}
