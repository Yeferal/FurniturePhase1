import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piece } from '../../models/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  private url = "localhost:3000/piece";
  constructor(private http:HttpClient) { }

  public getAllPieces(): Observable<Array<Piece>>{
    return this.http.get<Array<Piece>>(this.url);
  }

  public getPieceById(id: number){
    return this.http.get<Piece>(this.url+"/"+id);
  }
}