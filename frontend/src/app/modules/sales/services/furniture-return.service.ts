import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class FurnitureReturnService {
  private URL = "sale/furniture/";
  constructor(private http:HttpClient) { }

  public getDetailBill(cod:string=""): Observable<Array<any>>{
    return this.http.get<Array<any>>(GLOBAL.SALE_SERVICE+"sale/"+cod);
  }

  public getDetailClientByBillId(cod:string=""): Observable<Array<any>>{
    return this.http.get<Array<any>>(GLOBAL.SALE_SERVICE+"sale/client/"+cod);
  }

  public ReturnFurniture(cod:any,id:any): Observable<any>{
    let data = {
      id:id,
      code:cod,
    }
    return this.http.post<any>(GLOBAL.SALE_SERVICE+this.URL+"devolution/"+id+"/"+cod,data,{
      withCredentials: true,
    }
    );
  }
  
}
