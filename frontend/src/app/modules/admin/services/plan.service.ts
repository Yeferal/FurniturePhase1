import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  URL = 'https://furniture-app-3.herokuapp.com';
  constructor(private http: HttpClient) { }

  createPlan(data: any): Observable<any>{
    return this.http.post<any>(this.URL+"/admin/plan",data);
  }
}
