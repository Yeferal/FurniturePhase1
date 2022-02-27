import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Piece } from '../../../../core/models/piece';
import { PieceServiceService } from '../../services/pieces/piece-service.service';

@Component({
  selector: 'app-piece-information',
  templateUrl: './piece-information.component.html',
  styleUrls: ['./piece-information.component.scss']
})
export class PieceInformationComponent implements OnInit, OnChanges{

  @Input() id: number = 0;
  piece: Piece;

  constructor(private pieceService: PieceServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.pieceService.getPiece(this.id).subscribe(
      (response)=>{
        this.piece = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
