import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../../core/models/category';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/core/rutas';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //url service
  private url = "https://jsonplaceholder.typicode.com/todos/";
  private URL = "fabricate/category/";
  constructor(private http:HttpClient) { }

  //Get all categories thrown an api
  public getAllCategories(filter:string=""): Observable<Array<Category>>{
    return this.http.get<Array<Category>>(GLOBAL.INVENTORY_SERVICE+this.URL+"get-all-categories?filter="+filter);
  }

  public saveCategory(category:any):Observable<Category> {
    return this.http.post<any>(GLOBAL.INVENTORY_SERVICE+this.URL+'create-category',category,{
      withCredentials: true,
    });
  }

  public deleteCategory(id: number): Observable<any>{
    return this.http.delete<any>(GLOBAL.INVENTORY_SERVICE+this.URL+'delete/'+id);
  }
}
