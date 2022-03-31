import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Piece } from '../../../core/models/piece';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  private url = "http://localhost:3000/piece";
  private URL = "http://localhost:8080/fabricate/piece/";

  constructor(private http:HttpClient) { }

  //Get all categories thrown an api
  public getAllPieces(pageNumber: number, name: string): Observable<any>{
    const final_url = this.URL+'get-all'+((pageNumber!=0)? '?page='+pageNumber+((name!='')?'&name='+name:''):((name!='')? '?name='+name:''));
    return this.http.get<Array<Piece>>(final_url);
  }

  public getPiece(id: number): Observable<Piece>{
    return this.http.get<Piece>(this.url+'/'+id);
  }

  public savePiece(piece: any): Observable<Piece>{
    return this.http.post<Piece>(this.URL+'register-piece',piece);
  }

  public saveUpdate(piece: any): Observable<Piece>{
    return this.http.post<Piece>(this.URL+'update-piece',piece);
  }

  public getPieceById(id: number): Observable<Piece>{
    return this.http.get<Piece>(this.URL+'get-piece/'+id);
  }

  public deletePiece(id: number): Observable<any>{
    return this.http.delete<any>(this.URL+'delete/'+id);
  }

  postProvidePiece(data: any): Observable<any>{
    return this.http.post<any>(`${this.URL}add-in-stock/${data.id}/${data.stock}/${data.cost}`,{}, {
      withCredentials: true
    });
  }
}
