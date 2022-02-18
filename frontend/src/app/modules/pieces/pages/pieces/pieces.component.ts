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
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 2,
      name: 'pieza2',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 3,
      name: 'pieza3',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 4,
      name: 'pieza4',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 5,
      name: 'pieza5',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 6,
      name: 'pieza6',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 7,
      name: 'pieza7',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 8,
      name: 'pieza8',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 9,
      name: 'pieza9',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 10,
      name: 'pieza10',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 11,
      name: 'pieza11',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
    },
    {
      id: 12,
      name: 'pieza12',
      precio: 100.25,
      tipo: 'plancha',
      cantidad: 50,
      precio_venta: 50.25
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



}
