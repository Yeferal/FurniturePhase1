import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FurnitureReturnService } from '../../services/furniture-return.service';

interface DataReturn {
  min: any;
  max: any;
  amount: any;
  codeFurniture: any;
  nitClient: any;
  nameProduct: any;
}

@Component({
  selector: 'app-register-lost',
  templateUrl: './register-lost.component.html',
  styleUrls: ['./register-lost.component.scss']
})
export class RegisterLostComponent implements OnInit {

  @Input() dataReturn: DataReturn = {
    min: '',
    max: '',
    amount: '',
    codeFurniture: '',
    nitClient: '',
    nameProduct: '',
  };

  @Input() idBill: number = -1;
  
  returnForm: FormGroup = new FormGroup({
    nitClient: new FormControl(this.dataReturn.nitClient, Validators.required),
    date1: new FormControl(null, Validators.required),
    codeProduct: new FormControl(this.dataReturn.codeFurniture, Validators.required),
    amount: new FormControl(this.dataReturn.amount, Validators.required)  
  });

  // @Output() dataReturn = new EventEmitter<DataReturn>();
  

  dataR: DataReturn;

  constructor(private furnitureService: FurnitureReturnService) { }

  ngOnInit(): void {
    this.returnForm.get('nitClient')?.setValue(this.dataReturn.nitClient);
    this.returnForm.get('codeProduct')?.setValue(this.dataReturn.codeFurniture);
    this.returnForm.get('amount')?.setValue(this.dataReturn.amount);
  }

  registerLost(){
     let cod = this.dataReturn.codeFurniture;
     console.log(this.idBill+" "+cod);
     if (cod && this.idBill) {
        this.furnitureService.ReturnFurniture(cod, this.idBill).subscribe(
          result => {
            console.log(result);
            
            if(result.status_code == 200) {
              this.removeItem(this.idBill);
            }
          },
          err => {
            console.warn(err);
            
          }
        )
     }else{
       console.log("ERROR");
       
     }
  }

  removeItem(index: number){

    
    this.removeIndex.emit(index);
  }

  @Output() removeIndex = new EventEmitter<number>();




}
