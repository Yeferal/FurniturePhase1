import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private URL = "http://localhost:8080/sales"
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }  

  public getOneInvoice(noInvoices: number):Observable <any>{
    return this.http.get<any>(this.url+`/${noInvoices}`);
  }


  public getInvoicesCliente(data: any):Observable<Page>{
    return this.http.get<Page>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-bill-cliente',{
      withCredentials: true,
      params: data
    });
  }

  public registerSale(data: any): Observable<any>{
    console.log(data);
    return this.http.post<any>(this.URL+"/bill",data);
  }

}
