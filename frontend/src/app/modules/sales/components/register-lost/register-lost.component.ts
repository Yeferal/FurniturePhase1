import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  returnForm: FormGroup = new FormGroup({
    nitClient: new FormControl(null, Validators.required),
    date1: new FormControl(null, Validators.required),
    codeProduct: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required)  
  });

  // @Output() dataReturn = new EventEmitter<DataReturn>();
  @Input() dataReturn: DataReturn;
  dataR: DataReturn;

  constructor() { }

  ngOnInit(): void {
    
  }

  registerLost(){
    console.log(this.dataReturn);
    
    console.log(this.returnForm.value);
    
    if (this.returnForm.invalid) {
      return;
    }
  }




}
