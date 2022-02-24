import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ventas } from '../models/ventas';

@Injectable({
  providedIn: 'root'
})
export class SalesService{
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }
  
  public getSalesOfNow():Observable<Array<ventas>>{
    return this.http.get<Array<ventas>>(this.url);
  }
}
