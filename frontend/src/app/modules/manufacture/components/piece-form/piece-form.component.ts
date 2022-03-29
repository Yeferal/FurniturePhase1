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
    console.log(this.selectedId);
        
    if(!this.isEdit){
      this.pieceForm.reset();
    }else{
      /*
      for(let i = 0; i < this.pieces.length; i++){
        if(this.pieces[i].id == this.selectedId){
          this.piece = this.pieces[i];
          break;
        }
      } */
      this.pieceService.getPieceById(this.selectedId).subscribe(
        res=> {
          this.piece=res
          this.pieceForm.value.pieceName = this.piece.name
          this.pieceForm.value.piecePrice = this.piece.price
          this.pieceForm.value.pieceCost = this.piece.cost
          this.pieceForm.value.pieceCategory = this.piece.category.id
        },
        err=> console.log(err)
      )
    }
  }
  showMessage:number = 0;
  message:string ="";
  @Output() pieceUpdated = new EventEmitter<Piece>();

  doChanges() {
    if(this.isEdit){
      console.log(this.piece);
      console.log(this.pieceForm.value);

      this.pieceService.saveUpdate({
        id: this.selectedId,
        name: this.pieceForm.value.pieceName?this.pieceForm.value.pieceName:this.piece.name,
        price: this.pieceForm.value.piecePrice?this.pieceForm.value.piecePrice:this.piece.price,
        cost: this.pieceForm.value.pieceCost?this.pieceForm.value.pieceCost:this.piece.cost,
        stock: 0,
        category:{
          id:this.pieceForm.value.pieceCategory?this.pieceForm.value.pieceCategory:this.piece.category.id,
        }
      }).subscribe(
        res =>{
          this.showMessage = 1;
          this.message = "Pieza actualizada correctamente"
          this.sendFeedback(res.msj?res.msj:'');
        },
        err =>{
          this.showMessage = 2;
          try {
            this.message = err.error.msj
          }catch(e) {
            this.message = "Error al crear pieza, intente de nuevo";
          }
          console.warn(err);
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
          this.showMessage = 1;
          this.message = "Pieza creada correctamente"
          this.sendFeedback(res.msj?res.msj:'');
        },
        err =>{
          this.showMessage = 2;
          try {
            this.message = err.error.msj
          }catch(e) {
            this.message = "Error al crear pieza, intente de nuevo";
          }
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
