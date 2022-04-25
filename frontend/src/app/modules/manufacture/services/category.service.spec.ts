import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Category } from 'src/app/core/models/category';
import { SharedModule } from 'src/app/shared/shared.module';

import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpClientSpy: {get:jasmine.Spy, post:jasmine.Spy,delete:jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post','get','delete']);
    service = new CategoryService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Registar a new category', (done:DoneFn) => {
    const mockResult:Category = {}
    const data:Category = {}
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.saveCategory(data)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Remove a category',(done:DoneFn)=>{
    let res = new HttpResponse(
      {
        status: 200,
      }
    );
    httpClientSpy.delete.and.returnValue(of(res));
    service.deleteCategory(1)
    .subscribe(result=>{
      expect(result).toEqual(res);
      done();
    })
  })

  it('Get all categories',(done:DoneFn) => {
    let res: Category[]
    res = []
    httpClientSpy.get.and.returnValue(of(res));
    service.getAllCategories('')
    .subscribe(result => {
      expect(result).toEqual(res);
      done();
    })
  })
});
