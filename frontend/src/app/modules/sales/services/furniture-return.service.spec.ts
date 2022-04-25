import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { FurnitureReturnService } from './furniture-return.service';

describe('FurnitureReturnService', () => {
  let service: FurnitureReturnService;
  let httpClientSpy: {get:jasmine.Spy, post:jasmine.Spy,delete:jasmine.Spy,put:jasmine.Spy}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient',['post','get','delete','put']);
    service = new FurnitureReturnService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get detail bill by code',(done:DoneFn) => {
    const mockResult = [
      {}
    ]
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getDetailBill('1')
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Get client by id bill',(done:DoneFn) => {
    const mockResult = [
      {}
    ]
    httpClientSpy.get.and.returnValue(of(mockResult));
    service.getDetailClientByBillId('1')
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

  it('Return furniture',(done:DoneFn) => {
    const mockResult = {}
    httpClientSpy.post.and.returnValue(of(mockResult));
    service.ReturnFurniture(1,1)
    .subscribe(result => {
      expect(result).toEqual(mockResult);
      done();
    })
  })

});
