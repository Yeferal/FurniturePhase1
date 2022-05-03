import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Piece } from '../../../core/models/piece';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class PieceServiceService {
  private url = "http://localhost:3000/piece";
  private URL = "fabricate/piece/";

  constructor(private http:HttpClient) { }

  //Get all categories thrown an api
  public getAllPieces(pageNumber: number, name: string): Observable<any>{
    const final_url = GLOBAL.INVENTORY_SERVICE+this.URL+'get-all'+((pageNumber!=0)? '?page='+pageNumber+((name!='')?'&name='+name:''):((name!='')? '?name='+name:''));
    return this.http.get<Array<Piece>>(final_url);
  }

  public getPiece(id: number): Observable<Piece>{
    return this.http.get<Piece>(GLOBAL.INVENTORY_SERVICE+this.URL+id);
  }

  public savePiece(piece: any): Observable<Piece>{
    return this.http.post<Piece>(GLOBAL.INVENTORY_SERVICE+this.URL,piece);
  }

  public saveUpdate(piece: any): Observable<Piece>{
    return this.http.put<Piece>(GLOBAL.INVENTORY_SERVICE+this.URL,piece);
  }

  public getPieceById(id: number): Observable<Piece>{
    return this.http.get<Piece>(GLOBAL.INVENTORY_SERVICE+this.URL+id);
  }

  public deletePiece(id: number): Observable<any>{
    return this.http.delete<any>(GLOBAL.INVENTORY_SERVICE+'fabricate/piece/'+id);
  }

  public postProvidePiece(data: any): Observable<any>{
    ///stock/{id}/{stock}/{cost}
    return this.http.post<any>(`${GLOBAL.INVENTORY_SERVICE+this.URL}stock/${data.id}/${data.stock}/${data.cost}`,{}, {
      withCredentials: true
    });
  }

  public postRemovePiece(data: any): Observable<any>{
    ///remove/{id}/{stock}
    return this.http.post<any>(`${GLOBAL.INVENTORY_SERVICE+this.URL}remove/${data.id}/${data.amount}`,{},{
      withCredentials: true
    })
  }
}
