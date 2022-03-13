import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../../core/models/category';
import { Observable } from 'rxjs';
import { Piece } from 'src/app/core/models/piece';

@Injectable({
  providedIn: 'root'
})
export class PiecesService {

  //url service
  private url = "https://jsonplaceholder.typicode.com/todos/";
  private URL = "http://localhost:8080/fabricate/piece/";

  constructor(private http:HttpClient) { }
  
  //Get all categories thrown an api
  public getAllPieces(): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(this.url);
  }

  public savePiece(piece:any):Observable<Piece> {
    return this.http.post<any>(this.URL+'register-piece',piece,{
      withCredentials: true,
    });
  }
}
