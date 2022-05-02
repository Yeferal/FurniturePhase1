import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }  

  public getReturnClient(data: any):Observable<Page>{
    return this.http.get<Page>(GLOBAL.SALES_REPORT_SERVICE+'sales/invoice/get-return-client',{
      withCredentials: true,
      params: data
    });
  }

}
