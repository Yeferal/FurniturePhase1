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
  piece: Piece;

  constructor(private pieceService: PieceServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.pieceService.getPieceById(this.id).subscribe(
      res => {
        console.log(res);
        
        this.piece = res
      },
      err => {

      }
    )
    /*this.pieceService.getPiece(this.id).subscribe(
      (response)=>{
        this.piece = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );*/
  }

}
