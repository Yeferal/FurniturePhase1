import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }  

  public getReturnClient(data: any):Observable<Page>{
    return this.http.get<Page>('http://localhost:8080/sales/invoice/get-return-client',{
      withCredentials: true,
      params: data
    });
  }

}
