import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-piece-form',
  templateUrl: './piece-form.component.html',
  styleUrls: ['./piece-form.component.scss']
})
export class PieceFormComponent implements OnInit {

  @Input() isEdit: boolean;
  @Input() selectedId: number;
  @Output() feedbackEvent = new EventEmitter<string>();
  @Output() closePieceFormModalEvent = new EventEmitter<boolean>();

  pieceForm = new FormGroup({
    pieceName: new FormControl('',[
      Validators.required
    ]),
    pieceCategory: new FormControl('',[
      Validators.required
    ]),
    piecePrice: new FormControl('',[
      Validators.required,
      Validators.min(0),
      Validators.pattern('[0-9]+($|.[0-9]+)')
    ]),
    pieceCost:new FormControl('',[
      Validators.min(0),
      Validators.pattern('[0-9]+($|.[0-9]+)'),
      Validators.required,
    ])
  });

  constructor() { }

  ngOnInit(): void {
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
