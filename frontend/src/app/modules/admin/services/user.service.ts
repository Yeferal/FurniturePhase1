import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/admin/user'
  constructor(private httpClient:HttpClient) { }

  public registerUser(user: {}):Observable<any>{
    return this.httpClient.post(this.url,user)
  }

  public getFilterAllUsers(pageNumber: number, name: string,role:any):Observable<any>{
    return this.httpClient.get(this.url+"/todo?page="+pageNumber+"&name="+name+"&role="+role);
  }
  public getAllUsers(pageNumber: number):Observable<any>{
    return this.httpClient.get(this.url+"/todo?page="+pageNumber);
  }

  public deleteUser(userId: any): Observable<any>{
    return this.httpClient.delete(this.url+"/"+userId);
  }
}
