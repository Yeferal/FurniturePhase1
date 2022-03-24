import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/modules/session/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class JwtGuard implements CanActivate {

  constructor(public auth: SessionService, public router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    let cookie = this.cookieService.get('tokenfurniture');

    console.log(cookie);
    this.isAdmin(cookie);
    // if(this.isAdmin(cookie) || this.isFabricateman(cookie) || this.isSales(cookie)){
    //   if(this.isAdmin(cookie)){
    //   return false;
    // }
    return true;
  }

  isAdmin(cookie: string): boolean{

    let hdrs = new HttpHeaders();
    hdrs.set('Authorization',cookie);

    this.auth.isAuthenticatedAdmin(hdrs).subscribe(
      res => {
        console.log('admin',res);
        return res;
      },
      error => {
        return false;
      }
    );

    return false;
  }

  isSales(cookie: string): boolean{

    let hdrs = new HttpHeaders('token');
    hdrs.set('Authorization',cookie);

    this.auth.isAuthenticatedSales(hdrs).subscribe(
      res => {
        console.log('admin',res);
        return res;
      },
      error => {
        return false;
      }
    );

    return false;
  }

  isFabricateman(cookie: string): boolean{

    let hdrs = new HttpHeaders('token');
    hdrs.set('Authorization',cookie);

    this.auth.isAuthenticatedFabricate(hdrs).subscribe(
      res => {
        console.log('admin',res);
        return res;
      },
      error => {
        return false;
      }
    );

    return false;
  }
  
}
