import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  public getReportSalesXPeriod(data: any):Observable<any>{
    return this.http.get<any>('http://localhost:8080/admin/bill-details/report-sales-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public getReportEarningsXPeriod(data: any):Observable<any>{
    return this.http.get<any>('http://localhost:8080/admin/report/report-earnings-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public getReportMinFurnitureXPeriod(data: any):Observable<any>{
    return this.http.get<any>('http://localhost:8080/admin/report/report-min-furniture-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public getReportMaxFurnitureXPeriod(data: any):Observable<any>{
    return this.http.get<any>('http://localhost:8080/admin/report/report-max-furniture-x-period', {
      withCredentials: true,
      params: data
    });
  }

}
