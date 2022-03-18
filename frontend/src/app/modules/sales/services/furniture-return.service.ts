import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FurnitureReturnService {
  private URL = "http://localhost:8080/sale/furniture/";
  constructor(private http:HttpClient) { }

  public getDetailBill(cod:string=""): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.URL+cod);
  }

  public getDetailClientByBillId(cod:string=""): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.URL+"client/"+cod);
  }

  public ReturnFurniture(cod:any,id:any): Observable<any>{
    return this.http.get<any>(this.URL+"/devolution/"+cod+"/bill/"+id);
  }
  
}
