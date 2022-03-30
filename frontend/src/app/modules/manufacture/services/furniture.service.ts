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
      withCredentials: true,
      params: {code: id}
    });
  }

  public getFurnituresOnSale(name: string, pageNumber: number): Observable<Array<Furniture>>{
    const final_url = this.URL+'/furniture/on-sale'+((pageNumber!=0)? '?page='+pageNumber+((name!='')?'&name='+name:''):((name!='')? '?name='+name:''));
    return this.http.get<Array<Furniture>>(final_url);
  }

  public getFurnituresOnStorage(name: string, pageNumber: number): Observable<Array<Furniture>>{
    const final_url = this.URL+'/furniture/on-storage'+((pageNumber!=0)? '?page='+pageNumber+((name!='')?'&name='+name:''):((name!='')? '?name='+name:''));
    return this.http.get<Array<Furniture>>(final_url);
  }

  public getFurnituresOnSession(): Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>("http://localhost:8080/sales/furniture-in-bill/on-session");
  }

  public registerFurnitureOnSession(data: any): Observable<any>{
    return this.http.post<any>("http://localhost:8080/sales/furniture-in-bill/on-session", data);
  }

  public deleteFurnitureOnSession(id: number): Observable<any>{
    return this.http.delete<any>("http://localhost:8080/sales/furniture-in-bill/on-session/"+id);
  }

  public deleteAllFurnituresOnSession(): Observable<any>{
    return this.http.delete<any>("http://localhost:8080/sales/furniture-in-bill/on-session");
  }

  public postFurniture(data: any, fileData: any){
    return this.http.post<any>(this.URL+'/furniture/register-furniture',fileData,{
      withCredentials: true,
      // params: {file: fileData},
    });
  }

  public getAllFurnitureListFilter(page: any, filter: any){
    return this.http.get<any>(this.URL+'/furniture/get-allFurniture-filter?page='+page,{
      withCredentials: true,
      params: filter
    });
  }

  public getAllFurnitureList(page: any){
    return this.http.get<any>(this.URL+'/furniture/get-allFurniture?page='+page,{
      withCredentials: true
    });
  }

  public updateStatus(id: number):Observable<any>{
    return this.http.put<any>(this.URL+'/furniture/put-furniture-on-sale/'+id,{
      withCredentials: true
    });
  }

  public putOnSale(data: any): Observable<any>{
    return this.http.put<any>(this.URL+"/furniture/put-furniture-on-sale/",data);
  }
}
