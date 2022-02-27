import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Piece } from '../../models/piece';
import { PieceServiceService } from '../../services/pieces/piece-service.service';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent implements OnInit, OnChanges {

  piece: Piece;
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
    pieceCost:new FormControl('',[
      Validators.min(0),
      Validators.pattern('[0-9]+($|.[0-9]+)'),
      Validators.required,
    ])
  });

  constructor(private pieceService: PieceServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.isEdit){
      this.pieceForm.reset(); 
    }else{
      this.pieceService.getPiece(this.selectedId).subscribe(
        (response)=>{
          this.piece = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }
  }

  doChanges() {
    if(this.isEdit){
      console.log('Se edito');
      this.sendFeedback('Se ha modificado con éxito');
    }else{
      console.log("Se guardo");
      this.sendFeedback('Se ha agregado con éxito');
    }
  }

  sendFeedback(msg: string): void {
    this.feedbackEvent.emit(msg);
  }

}
