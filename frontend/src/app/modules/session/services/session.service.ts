import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  isAuthenticatedAdmin():Observable<boolean> {
    return this.http.post<boolean>(GLOBAL.GATEWAY_SERVICE+'user/isAdminLoggedIn',{
      withCredentials: true,
    });
  }

  isAuthenticatedSales():Observable<boolean> {
    return this.http.post<boolean>(GLOBAL.GATEWAY_SERVICE+'user/isSalesmanLoggedIn',{
      withCredentials: true
    });
  }

  isAuthenticatedFabricate():Observable<boolean> {
    return this.http.post<boolean>(GLOBAL.GATEWAY_SERVICE+'user/isFabricatemanLoggedIn',{
      withCredentials:true
    });
  }

  isAuthenticatedIsLogged():Observable<boolean> {
    return this.http.post<boolean>(GLOBAL.GATEWAY_SERVICE+'user/isLoggedIn',{
      withCredentials:true
    });
  }

  postlogin(data: any){
    return this.http.post<any>(GLOBAL.GATEWAY_SERVICE+'user/login',data, {
      withCredentials: true
    });

  }


}
