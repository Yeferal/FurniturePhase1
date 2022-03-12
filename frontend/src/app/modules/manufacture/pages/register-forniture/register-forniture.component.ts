import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Furniture } from 'src/app/core/models/furniture';
import { Piece } from 'src/app/core/models/piece';
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

  pieceForm: FormGroup = new FormGroup({
    namePiece: new FormControl(null, Validators.required),
    amount: new FormControl(1, Validators.required),
  });

  maxSizeRows: number = 10;
  p: number = 1;
  listPieces: Array<Piece> = []
  public files: any [] = [];
  public fileCapture: any;
  public preview: any;
  msg = "";
  furnitureS: Furniture = new Furniture();

  navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
  navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
  lis = ['One','Two','Thre','Four','Five',];

  constructor(private sanitizer: DomSanitizer, private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    
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
      formFile.append('cost','500');
      formFile.append('path',"");
      formFile.append('plan',"1");
      
      let data = {
        name: this.fornitureForm.get('name')?.value,
        price: this.fornitureForm.get('salePrice')?.value,
        creationDate: this.fornitureForm.get('creationDate')?.value,
        code: this.fornitureForm.get('code')?.value,
        cost: 0,
        description: this.fornitureForm.get('description')?.value,
        path: '',
        profile: {
          id: 1
        },
        plan: {
          id: 1
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
          
        }
      );
    
  }

  deletePiece(id: any){
    console.log(id);
    
    this.listPieces.splice(id,1);
  }

  addPiece(){
    console.log(this.pieceForm.value);
    
    let p: Piece = {
      id: Math.floor(Math.random() * 100) + 1,
      name: this.pieceForm.get('namePiece')?.value,
      cost: Math.floor(Math.random() * 1000) + 1,
      category: 'Madera',
      amount: this.pieceForm.get('amount')?.value
      //precio_venta: Math.floor(Math.random() * 1000.00) + 1.00
    }

    this.listPieces.push(p);
  }

}
