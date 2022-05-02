import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
private URL = 'http://localhost:8080/'



  private url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  public getReportSalesXPeriod(data: any):Observable<any>{
    return this.http.get<any>(GLOBAL.REPORT_SERVICE+'admin/bill-details/report-sales-x-period', {
      withCredentials: true,
      params: data
    });
  }
  
  public exportReportSalesXPeriod(data: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post('http://localhost:8080/admin/export/report-sales-x-period', data, httpOptions);
  }

  public getReportEarningsXPeriod(data: any):Observable<any>{
    return this.http.get<any>(GLOBAL.REPORT_SERVICE+'admin/report/report-earnings-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public exportReportEarningsXPeriod(data: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post('http://localhost:8080/admin/export/report-earnings-x-period', data, httpOptions);
  }

  public getReportMinFurnitureXPeriod(data: any):Observable<any>{
    return this.http.get<any>(GLOBAL.REPORT_SERVICE+'admin/report/report-min-furniture-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public exportReportMinFurnitureXPeriod(data: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post('http://localhost:8080/admin/export/report-min-furniture-x-period', data, httpOptions);
  }

  public getReportMaxFurnitureXPeriod(data: any):Observable<any>{
    return this.http.get<any>(GLOBAL.REPORT_SERVICE+'admin/report/report-max-furniture-x-period', {
      withCredentials: true,
      params: data
    });
  }

  public exportReportMaxFurnitureXPeriod(data: any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post('http://localhost:8080/admin/export/report-max-furniture-x-period', data, httpOptions);
  }

  public getReturnFurnitures(page:any, date1:any, date2:any):Observable<any>{
    return this.http.get(GLOBAL.REPORT_SERVICE+"admin/report/devolution?page="+page+"&date1="+date1+"&date2="+date2)
  }

  public exportReturnFurnitures(data:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post('http://localhost:8080/admin/export/report-return-furniture', data, httpOptions);
  }

  public getReportBestSellerXPeriod(data: any): Observable<any>{
    return this.http.get(this.URL+"/admin/report/report-best-seller-x-period",{
      withCredentials: true,
      params: data
    })
  }

  public exportReportBestSellerXPeriod(data: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post(this.URL+"/admin/export/report-best-seller-x-period", data, httpOptions);
  }

  public getReportBestEarnerXPeriod(data: any): Observable<any>{
    return this.http.get(this.URL+"/admin/report/report-best-earner-x-period",{
      withCredentials: true,
      params: data
    });
  }

  public exportReportBestEarnerXPeriod(data: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/json; charset=UTF-8'
      }),
      responseType: 'text' as 'text'
    };
    return this.http.post(this.URL+"/admin/export/report-best-earner-x-period", data, httpOptions);
  }
}
