import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserRegisterdValidator } from '../../validators/userValidator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
 
  constructor() { }

  formRegister: FormGroup;
  TYPE_ACOUNT = [
    {
      type:"Fabricante",val:0
    },
    {
      type:"Vendedor", val:1
    },
    {
      type:"Administrador", val:2
    }
  ]

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      passwordConfirm: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
    
      ]),
      role: new FormControl(this.TYPE_ACOUNT[0], [Validators.required])
    },{
      validators:UserRegisterdValidator.checkPasswords
    });
  }

  registerUser(){
    console.log(this.formRegister.value);
    
  }
}
