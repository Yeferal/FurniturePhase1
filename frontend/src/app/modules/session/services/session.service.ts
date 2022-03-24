import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  isAuthenticatedAdmin(cookie: any) {
    return this.http.post<any>('http://localhost:8080/user/isAdminLoggedIn',{
      withCredentials: true
    });
  }

  isAuthenticatedSales(cookie: any) {
    return this.http.post<any>('http://localhost:8080/user/isSalesmanLoggedIn',{
      withCredentials:true,
      headers: cookie
    });
  }

  isAuthenticatedFabricate(cookie: any) {
    return this.http.post<any>('http://localhost:8080/user/isFabricatemanLoggedIn',{
      withCredentials:true,
      headers: cookie
    });
  }

  postlogin(data: any){
    return this.http.post<any>('http://localhost:8080/user/login',data, {
      withCredentials: true
    });

  }


}
