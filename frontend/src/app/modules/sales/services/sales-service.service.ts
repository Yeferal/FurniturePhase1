import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../../../core/models/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService{
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }
  
  public getSalesOfNow():Observable<Array<Sales>>{
    return this.http.get<Array<Sales>>(this.url);
  }

  public getSalesByClient(name:string){
    return this.http.get<Array<Sales>>(this.url)
  }
}
