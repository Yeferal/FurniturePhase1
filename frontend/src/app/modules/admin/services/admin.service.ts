import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }
  /*
  public getAllUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url);
  }*/
}
