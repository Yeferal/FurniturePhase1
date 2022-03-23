import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    user: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });
  messageError = '';
  isError = false;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.invalid) {
      this.messageError = 'Debe llenar todos los campos';
      this.isError = true;
      return;
    }

    this.messageError = 'Usuario Aceptado';
    this.isError = true;
  }


  createCookie(nameCookie: string, valueCookie: string){
    this.cookieService.set(nameCookie, valueCookie);
    //VIEW COOKIE
    this.cookieService.get(nameCookie);
    console.log(this.cookieService.get(nameCookie));
    
  }

}
