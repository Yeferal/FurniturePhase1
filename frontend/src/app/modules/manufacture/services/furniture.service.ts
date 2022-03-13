import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../../../core/models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private url = "https://jsonplaceholder.typicode.com/todos/";
  private urlSoberanis = "http://localhost:3000/furniture";
  private URL = "http://localhost:8080/fabricate";
  constructor(private http:HttpClient) { }

  public getAllFurnitures():Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(this.url);
  }

  public getAvailableFurniture(filter=""):Observable<Array<Furniture>>{
    const x=this.url+"?filtro="+filter;
    return this.http.get<Array<Furniture>>(this.url);
  }

  public getFurniture(id: number): Observable<Furniture>{
    return this.http.get<Furniture>(this.URL+'/furniture/get-furniture',{
      withCredentials: true
    });
  }

  public getFurnituresOnSale(): Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(this.urlSoberanis+'?onSale=1');
  }

  public postFurniture(data: any, fileData: any){
    return this.http.post<any>(this.URL+'/furniture/register-furniture',fileData,{
      withCredentials: true,
      // params: {file: fileData},
    });
  }

  public getAllFurnitureListFilter(page: any, filter: any){
    return this.http.get<any>(this.URL+'/furniture//get-allFurniture?page='+page+'&filter='+filter,{
      withCredentials: true
    });
  }

  public getAllFurnitureList(page: any){
    return this.http.get<any>(this.URL+'/furniture//get-allFurniture?page='+page,{
      withCredentials: true
    });
  }

  public updateStatus(id: number):Observable<any>{
    return this.http.put<any>(this.URL+'/furniture/put-furniture-on-sale/'+id,{
      withCredentials: true
    });
  }

}
