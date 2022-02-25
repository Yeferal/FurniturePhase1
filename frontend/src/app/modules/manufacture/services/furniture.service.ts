import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Furniture } from '../models/furniture';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private url = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http:HttpClient) { }

  public getAllFurnitures():Observable<Array<Furniture>>{
    return this.http.get<Array<Furniture>>(this.url);
  }

  public getAvailableFurniture(filter=""):Observable<Array<Furniture>>{
    const x=this.url+"?filtro="+filter;
    return this.http.get<Array<Furniture>>(this.url);
  }
}
