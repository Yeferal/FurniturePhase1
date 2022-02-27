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
  constructor(private http:HttpClient) { }

  public getAllFurnitures():Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(this.url);
  }

  public getAvailableFurniture(filter=""):Observable<Array<Furniture>>{
    const x=this.url+"?filtro="+filter;
    return this.http.get<Array<Furniture>>(this.url);
  }

  public getFurniture(id: number): Observable<Furniture>{
    return this.http.get<Furniture>(this.urlSoberanis+'/'+id);
  }
}
