import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }  

  public getOneInvoice(noInvoices: number):Observable <any>{
    return this.http.get<any>(this.url+`/${noInvoices}`);
  }

}
