import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { GLOBAL } from 'src/app/core/rutas';
import { Sales } from '../../../core/models/sales';


@Injectable({
  providedIn: 'root'
})
export class SalesService{
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }
  
  // public getSalesOfNow():Observable<Array<Sales>>{
  //   return this.http.get<Array<Sales>>(this.url);
  // }

  // public getSalesByClient(name:string){
  //   return this.http.get<Array<Sales>>(this.url)
  // }

  public getSalesToday(data: any):Observable<Page> {
    return this.http.get<Page>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-sale-today',{
      withCredentials: true,
      params: data
    });
  }

  public getSalesClient(data: any):Observable<Page> {
    return this.http.get<Page>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-sales-clients',{
      withCredentials: true,
      params: data
    });
  }

  public getBillDetailsClient(data: any):Observable<Page>{
    return this.http.get<Page>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-bill-cliente',{
      withCredentials: true,
      params: data
    });
  }

  public getEarningsTotal(data: any){
    return this.http.get<any>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-earnings-total', {
      withCredentials: true,
      params: data
    })
  }

}
