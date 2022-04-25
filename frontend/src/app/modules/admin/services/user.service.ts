import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'admin/user'
  constructor(private httpClient:HttpClient) { }

  public registerUser(user: {}):Observable<any>{
    return this.httpClient.post(GLOBAL.ADMIN_SERVICE+this.url,user,{
      withCredentials: true
    })
  }

  public getFilterAllUsers(pageNumber: number, name: string,role:any):Observable<any>{
    return this.httpClient.get(GLOBAL.ADMIN_SERVICE+this.url+"?page="+pageNumber+"&name="+name+"&role="+role,{
      withCredentials: true
    });
  }
  public getAllUsers(pageNumber: number):Observable<any>{
    return this.httpClient.get(GLOBAL.ADMIN_SERVICE+this.url+"?page="+pageNumber,{
      withCredentials: true
    });
  }

  public deleteUser(userId: any): Observable<any>{
    return this.httpClient.delete(GLOBAL.ADMIN_SERVICE+this.url+"/"+userId,{
      withCredentials: true
    });
  }
}
