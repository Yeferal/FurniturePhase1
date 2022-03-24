import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '../../services/session.service';

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

  constructor(private cookieService: CookieService, private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if (this.loginForm.invalid) {
      this.messageError = 'Debe llenar todos los campos';
      this.isError = true;
      return;
    }

    let formFile = new FormData();
    formFile.append('user',this.loginForm.get('user')?.value);
    formFile.append('password',this.loginForm.get('password')?.value);

    // this.messageError = 'Usuario Aceptado';
    this.isError = true;
    this.sessionService.postlogin(formFile).subscribe(
      res => {
        console.log(res);
        if (res.token) {
          this.createCookie('tokenfurniture',res.token);
          this.router.navigate(['home']);
        }else{
          this.messageError = res.msj;
        }
      },
      error => {
        console.log(error);
        
      }
    );

  }


  createCookie(nameCookie: string, valueCookie: string){
    this.cookieService.set(nameCookie, valueCookie);
    //VIEW COOKIE
    this.cookieService.get(nameCookie);
    console.log(this.cookieService.get(nameCookie));
    
  }

}
