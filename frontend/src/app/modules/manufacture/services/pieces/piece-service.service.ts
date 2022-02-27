import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Piece } from '../../../../core/models/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  private url = "http://localhost:3000/piece";
  constructor(private http:HttpClient) { }

  public getAllPieces(): Observable<Array<Piece>>{
    return this.http.get<Array<Piece>>(this.url);
  }

  public getPiece(id: number): Observable<Piece>{
    return this.http.get<Piece>(this.url+'/'+id);
  }
}