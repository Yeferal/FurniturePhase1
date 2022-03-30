import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Piece } from 'src/app/core/models/piece';
import { PieceServiceService } from 'src/app/modules/manufacture/services/piece-service.service';
import { PlanService } from 'src/app/modules/sales/services/plan.service';
@Component({
  selector: 'app-creation-furniture-plans',
  templateUrl: './creation-furniture-plans.component.html',
  styleUrls: ['./creation-furniture-plans.component.scss']
})
export class CreationFurniturePlansComponent implements OnInit {

  searchValue: string = '';
  plan: any = {
    name: "",
    description: ""
  };
  
  pieceForm: FormGroup = new FormGroup({
    // namePiece: new FormControl(null, Validators.required),
    amount: new FormControl(1, Validators.required),
  });

  maxSizeRows: number = 10;
  pageNumber: number = 1;
  totalItems: number = 0;
  actualTotal: number = 0;
  listPieces: Array<Piece> = [];
  listPiecesPlan: Array<Piece> = [];

  navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');

  constructor(private sanitizer: DomSanitizer, private pieceService: PieceServiceService, private planService: PlanService) { }

  ngOnInit(): void {
    this.searchPieces();
  }

  pageChanged(event: any){
    this.pageNumber = event;
    this.searchPieces();
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
      price: item.price,
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
    this.getTotal();
  }

  selectPiece(){
    console.log('Hola');
    
  }

  checkIfPlanIsValid(): boolean{
    console.warn(this.plan);
    if(this.plan.name==="") return false;
    if(this.plan.description==="") return false;
    if(this.listPiecesPlan.length<=0) return false;
    return true;
  }

  createPlan(){
    if (this.checkIfPlanIsValid()) {
      var assignments:any = [];
      this.listPiecesPlan.forEach(piecePlan=>{
        assignments.push({
          piece: { id: piecePlan.id },
          amount: piecePlan.amount
        });
      })
      const data = {
        plan: this.plan,
        assignments: assignments
      }
      this.planService.createPlan(data).subscribe(
        (response:any) =>{
          alert("Se ha creado el plan con éxito");
          this.plan.name = ""; this.plan.description="";
          this.listPiecesPlan = [];
        },
        (err:any) =>{
          alert("Ha ocurrido un error al hacer la solicitud que crea un plan");
        }
      );
    }else{
      alert("No ha ingresado los datos necesarios");
    }
  }

  setNameToSearch(event: any){
    this.searchValue = event.target.value;
    this.searchPieces();
  }

  searchPieces(){
    this.pieceService.getAllPieces(this.pageNumber-1,this.searchValue).subscribe(
      res => {
        this.listPieces = res.content;
        this.totalItems = res.totalElements;
      },
      err => {
        console.log(err);
      }
    )
  }

  getTotal() {
    this.listPieces.forEach(piece => {
      if(piece.price && piece.amount){
        this.actualTotal+=(piece.price * piece.amount);
      }
    });
  }

  updatePlanDescription(event:any){
    this.plan.description = event.target.value;
  }

  updatePlanName(event:any){
    this.plan.name = event.target.value;
  }
}
