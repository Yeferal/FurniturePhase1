import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = 'https://furniture-app-3.herokuapp.com/sales/client';
  constructor(private http: HttpClient) { }

  getClient(nit: any): Observable<Client>{
    return this.http.get<Client>(this.url+'/'+nit);
  }
}
