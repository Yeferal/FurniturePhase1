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

  isAuthenticatedAdmin():Observable<boolean> {
    return this.http.post<boolean>('https://furniture-app-3.herokuapp.com/user/isAdminLoggedIn',{
      withCredentials: true,
    });
  }

  isAuthenticatedSales():Observable<boolean> {
    return this.http.post<boolean>('https://furniture-app-3.herokuapp.com/user/isSalesmanLoggedIn',{
      withCredentials: true
    });
  }

  isAuthenticatedFabricate():Observable<boolean> {
    return this.http.post<boolean>('https://furniture-app-3.herokuapp.com/user/isFabricatemanLoggedIn',{
      withCredentials:true
    });
  }

  isAuthenticatedIsLogged():Observable<boolean> {
    return this.http.post<boolean>('https://furniture-app-3.herokuapp.com/user/isLoggedIn',{
      withCredentials:true
    });
  }

  postlogin(data: any){
    return this.http.post<any>('https://furniture-app-3.herokuapp.com/user/login',data, {
      withCredentials: true
    });

  }


}
