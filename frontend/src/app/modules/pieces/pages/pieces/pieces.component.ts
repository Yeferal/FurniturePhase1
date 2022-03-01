import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';
import { Piece } from 'src/app/core/models/piece';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {

  searchValue: string = '';
  maxSizeRows: number = 10;
  p: number = 1;
  rowsNumForm = new FormControl(10,Validators.required);

  list: Piece [] = [
    {
      id: 1,
      name: 'pieza1',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 2,
      name: 'pieza2',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 3,
      name: 'pieza3',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 4,
      name: 'pieza4',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 5,
      name: 'pieza5',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 6,
      name: 'pieza6',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 7,
      name: 'pieza7',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 8,
      name: 'pieza8',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 9,
      name: 'pieza9',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 10,
      name: 'pieza10',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 11,
      name: 'pieza11',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
    {
      id: 12,
      name: 'pieza12',
      cost: 100.25,
      category: 'plancha',
      amount: 50,
      cost_venta: 50.25
    },
  ];

  constructor() { }

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
    console.log(this.idPiece)
  }
}
