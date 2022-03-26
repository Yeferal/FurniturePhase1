import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/modules/session/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class JwtLogoutGuard implements CanActivate {
  
  constructor(public auth: SessionService, public router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    this.auth.isAuthenticatedIsLogged().subscribe(
      res => {
        if (!res) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      },
      error => {
        console.log(error);
        return true;
      }
    );
    return true;
  }

  isAdmin(): boolean{

    this.auth.isAuthenticatedAdmin().subscribe(
      res => {
        console.log('admin',res);
        return res;
      },
      error => {
        console.log(error);
        
        return false;
      }
    );

    return false;
  }

  isSales(): boolean{

    this.auth.isAuthenticatedSales().subscribe(
      res => {
        console.log('sales',res);
        return res;
      },
      error => {
        return false;
      }
    );

    return false;
  }

  isFabricateman(): boolean{

    this.auth.isAuthenticatedFabricate().subscribe(
      res => {
        console.log('fabricateman',res);
        return res;
      },
      error => {
        return false;
      }
    );

    return false;
  }
  
}
