import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Piece } from 'src/app/core/models/piece';

@Component({
  selector: 'app-register-forniture',
  templateUrl: './register-forniture.component.html',
  styleUrls: ['./register-forniture.component.scss']
})
export class RegisterFornitureComponent implements OnInit {

  fornitureForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    salePrice: new FormControl(null, [Validators.required, Validators.pattern('[0-9]+(.[0-9]+)*')]),
    // pieces: new FormControl(null, null),
    // cost: new FormControl(null,  [Validators.required, Validators.pattern('[0-9]+(.[0-9]+)*')]),
    assemblyDate: new FormControl(null, Validators.required),
    idUnique: new FormControl(null, Validators.required),
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

  navbarAutocomplete = document.querySelector('#navbar-search-autocomplete');
  navbarData = ['One', 'Two', 'Three', 'Four', 'Five'];
  lis = ['One','Two','Thre','Four','Five',];

  constructor(private sanitizer: DomSanitizer, ) { }

  ngOnInit(): void {
    
  }

  captureFile(event: any): any{
    this.fileCapture = event.target.files[0];
    this.extraerBase64(this.fileCapture).then((imagen: any) => {
      this.preview = imagen.base;
      // console.log(imagen);
      
    });
    // this.files.cl
    this.files.splice(0, this.files.length);
    this.files.push(this.fileCapture);
      // console.log(this.files);
    // console.log(event.target.files);
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
    if (this.fornitureForm.invalid) {
      
      return;
    }
    
    
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
      precio: Math.floor(Math.random() * 1000) + 1,
      tipo: 'Madera',
      cantidad: this.pieceForm.get('amount')?.value,
      precio_venta: Math.floor(Math.random() * 1000.00) + 1.00
    }

    this.listPieces.push(p);
  }

}
