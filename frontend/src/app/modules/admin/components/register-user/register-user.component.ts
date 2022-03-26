import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserRegisterdValidator } from '../../validators/userValidator';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
 
  constructor(private _userService: UserService) { }
  showMessage:number = 0;
  message:string ="";
  formRegister: FormGroup;
  TYPE_ACOUNT = [
    {
      type:"Fabricante",val:2
    },
    {
      type:"Vendedor", val:1
    },
    {
      type:"Administrador", val:0
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
      role: new FormControl(null, [Validators.required])
    },{
      validators:UserRegisterdValidator.checkPasswords
    });
  }

  registerUser(){
    let tmp = {
      username:this.formRegister.value.username,
      firstName:this.formRegister.value.name,
      lastName:"apellido",
      password:this.formRegister.value.password,
      userType:this.formRegister.value.role
    }
    this._userService.registerUser(tmp).subscribe(
      result => {
        if (result.status) {
          this.showMessage=1;
          this.message="Usuario registrado"
        }
      },
      error => {
        this.showMessage=2;
        this.message="Error al registrar usuario, intente de nuevo"
      }
    )
    
  }

}
