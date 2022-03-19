import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
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

  public getSalesToday(data: any):Observable<Page> {
    return this.http.get<Page>('http://localhost:8080/sales/invoice/get-sale-today',{
      withCredentials: true,
      params: data
    });
  }

  public getSalesClient(data: any):Observable<Page> {
    return this.http.get<Page>('http://localhost:8080/sales/invoice/get-sales-clients',{
      withCredentials: true,
      params: data
    });
  }

  public getBillDetailsClient(data: any):Observable<Page>{
    return this.http.get<Page>('http://localhost:8080/sales/invoice/get-bill-cliente',{
      withCredentials: true,
      params: data
    });
  }

}
