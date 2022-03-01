import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Piece } from 'src/app/core/models/piece';
import { lista as listP } from "src/app/global/list-pieces";
@Component({
  selector: 'app-creation-furniture-plans',
  templateUrl: './creation-furniture-plans.component.html',
  styleUrls: ['./creation-furniture-plans.component.scss']
})
export class CreationFurniturePlansComponent implements OnInit {

  searchValue: string = '';
  planForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null, null),
  });
  
  
  pieceForm: FormGroup = new FormGroup({
    // namePiece: new FormControl(null, Validators.required),
    amount: new FormControl(1, Validators.required),
  });

  maxSizeRows: number = 10;
  p: number = 1;
  p2: number = 1;
  listPieces: Array<Piece> = listP;
  listPiecesPlan: Array<Piece> = [];

  navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
  navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
  lis = ['One','Two','Thre','Four','Five',];

  constructor(private sanitizer: DomSanitizer, ) { }

  ngOnInit(): void {
    
  }


  deletePiece(id: any){
    this.listPiecesPlan.splice(id,1);
  }

  clearPlan(){
    this.listPiecesPlan.splice(0,this.listPiecesPlan.length);
  }

  addPiece(item: Piece){
    if(this.pieceForm.invalid){
      return ;
    }
    let isExisteElement = false;
    let p: Piece = {
      id: item.id,
      name: item.name,
      cost: item.cost,
      category: item.category,
      amount: this.pieceForm.get('amount')?.value
    }

    this.listPiecesPlan.forEach(element => {
      if (element.id == item.id) {
        element.amount += this.pieceForm.get('amount')?.value;
        isExisteElement = true;
        return ;
      }
    });

    if (!isExisteElement) {
      this.listPiecesPlan.push(p);
    }
    
  }

  selectPiece(){
    console.log('Hola');
    
  }

  createPlan(){
    if (this.planForm.invalid) {
      
      return;
    }
  }

}
