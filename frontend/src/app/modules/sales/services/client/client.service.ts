import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'http://localhost:8080/sales/client';
  constructor(private http: HttpClient) { }

  getClient(nit: any): Observable<Client>{
    return this.http.get<Client>(GLOBAL.SALE_SERVICE+'sales/client/'+nit,{
      withCredentials: true
    });
  }
}
