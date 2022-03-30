import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  private URL = "https://furniture-app-3.herokuapp.com/sales"
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }  

  public getOneInvoice(noInvoices: number):Observable <any>{
    return this.http.get<any>(this.url+`/${noInvoices}`);
  }


  public getInvoicesCliente(data: any):Observable<Page>{
    return this.http.get<Page>('https://furniture-app-3.herokuapp.com/sales/invoice/get-bill-cliente',{
      withCredentials: true,
      params: data
    });
  }

  public registerSale(data: any): Observable<any>{
    console.log(data);
    return this.http.post<any>(this.URL+"/bill",data);
  }

}
