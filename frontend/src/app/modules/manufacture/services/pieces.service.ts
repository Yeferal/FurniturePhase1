import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {

  //url service
  private url = "https://jsonplaceholder.typicode.com/todos/";
  
  constructor(private http:HttpClient) { }
  
  //Get all categories thrown an api
  public getAllPieces(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(this.url);
  }
}
