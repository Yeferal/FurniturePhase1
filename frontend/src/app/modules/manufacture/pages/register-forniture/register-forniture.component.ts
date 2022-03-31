import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Furniture } from 'src/app/core/models/furniture';
import { Piece } from 'src/app/core/models/piece';
import { Assigment, Plan } from 'src/app/core/models/plan';
import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-register-forniture',
  templateUrl: './register-forniture.component.html',
  styleUrls: ['./register-forniture.component.scss']
})
export class RegisterFornitureComponent implements OnInit {

  fornitureForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+(.[0-9]+)*')]),
    // pieces: new FormControl(null, null),
    // cost: new FormControl(null,  [Validators.required, Validators.pattern('[0-9]+(.[0-9]+)*')]),
    creationDate: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    assemblyUser: new FormControl(null, Validators.required),
    description: new FormControl(null, null),
  });

  planForm: FormGroup = new FormGroup({
    namePlan: new FormControl("", Validators.required)
  });

  maxSizeRows: number = 10;
  p: number = 1;
  listPieces: Array<Piece> = []
  public files: any [] = [];
  public fileCapture: any;
  public preview: any;
  msg = "";
  furnitureS: Furniture = new Furniture();
  planSelected: Plan;
  listPlans: Array<Plan> = []
  pageN: number = 0;
  planSerch: string = '';
  listAssignments: Array<Assigment> = []

  navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
  navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
  lis = ['One','Two','Thre','Four','Five',];

  constructor(private sanitizer: DomSanitizer, private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.getListPlan();
  }

  captureFile(event: any): any{
    this.fileCapture = event.target.files[0];
    this.extraerBase64(this.fileCapture).then((imagen: any) => {
      this.preview = imagen.base;
    });

    this.files.splice(0, this.files.length);
    this.files.push(this.fileCapture);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          // blob: $event,
          // image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          // blob: $event,
          // image,
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  });

  addForniture(){
    console.log(this.files.length);
    
    if (this.fornitureForm.invalid || this.files.length==0) {
      this.msg = "Debe de llenar todos los campos"
      return;
    }
    
    const formFile = new FormData();
      // console.log(this.files);
      formFile.append('file',"");
      this.files.forEach( archivo => {
        formFile.append('file',archivo);
      });

      formFile.append('name',this.fornitureForm.get('name')?.value);
      formFile.append('price',this.fornitureForm.get('price')?.value);
      formFile.append('creationDate',this.fornitureForm.get('creationDate')?.value);
      formFile.append('code',this.fornitureForm.get('code')?.value);
      formFile.append('profile',this.fornitureForm.get('assemblyUser')?.value);
      formFile.append('description',this.fornitureForm.get('description')?.value);
      formFile.append('cost',this.totalCost+'');
      formFile.append('path',"");
      formFile.append('plan',this.planSelected.id+'');
      
      let data = {
        name: this.fornitureForm.get('name')?.value,
        price: this.fornitureForm.get('salePrice')?.value,
        creationDate: this.fornitureForm.get('creationDate')?.value,
        code: this.fornitureForm.get('code')?.value,
        cost: this.planSelected.cost,
        description: this.fornitureForm.get('description')?.value,
        path: '',
        profile: {
          id: this.fornitureForm.get('assemblyUser')?.value
        },
        plan: {
          id: this.planSelected.id
        },
        status: 1
      }

      this.furnitureService.postFurniture(data, formFile).subscribe(
        res => {
          this.furnitureS = res;
          if(this.furnitureS.msj){
            this.msg = this.furnitureS.msj;
          }else{
            this.msg = "";
            this.fornitureForm.reset();
            this.files.splice(0, this.files.length);
            this.preview = null;
          }
        },
        error => {
          console.log(error);
          this.msg = error.error.msj;
        }
      );
    
  }

  deletePiece(id: any){
    console.log(id);
    
    this.listPieces.splice(id,1);
  }

  addPlan(i: number){
    console.log(this.planForm.value);
    this.planSelected = this.listPlans[i];

    this.furnitureService.getListPiecesPlan(this.planSelected.id)
      .subscribe(
        res => {
          console.log(res);
          this.listAssignments = res;
          this.calculatePlanCost();
        },
        error => {
          console.log(error);
          
        }
      )
  }

  getListPlan(){

    this.planSerch = (this.planForm.get('namePlan'))? this.planForm.get('namePlan')?.value : '';

    let data = {
      page: this.pageN,
      name: this.planSerch
    }

    this.furnitureService.getListPlans(data)
      .subscribe(
        res => {
          console.log('ListPlans',res);
          this.listPlans = res.content;
        },
        error => {
          console.log(error);
          
        }
      );
  }

  totalCost = 0;
  calculatePlanCost(){
    this.totalCost = 0;
    this.listAssignments.forEach(element => {
      console.log(element);
      
      if (element.piece.price!=undefined) {
        this.totalCost += element.piece.price*element.amount;
      }
    });
  }

}
