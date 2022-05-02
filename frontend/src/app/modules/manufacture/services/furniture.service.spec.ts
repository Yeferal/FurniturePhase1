import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { Pageable } from 'src/app/core/models/pageable';
import { SharedModule } from 'src/app/shared/shared.module';

import { FurnitureService } from './furniture.service';

describe('FurnitureService', () => {
  let service: FurnitureService;
  let httpClientSpy: {get: jasmine.Spy, put: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    });
    // service = TestBed.inject(FurnitureService);
    service = new FurnitureService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const mockPage: Page = {
    content: [],
    pageable: new Pageable(),
    last: false,
    totalElements: 1,
    totalPages: 1,
    number: 1,
    size: 1,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false
    },
    first: true,
    numberOfElements: 1,
    empty: false
  }


  it('should be true is equals mockPage of service  getAllFurnitureList(mockData.page)', (done: DoneFn) => {
    const mockData = {
      page: '0'
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getAllFurnitureList(mockData.page)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

  it('should be true is equals mockPage of service getAllFurnitureListFilter()', (done: DoneFn) => {
    const mockData = {
      page: '0'
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getAllFurnitureListFilter(mockData.page, '')
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

  it('should be true is equals mockPage of service updateStatus()', (done: DoneFn) => {
    const mockData = {
      id: 0
    }
    
    httpClientSpy.put.and.returnValue(of(mockPage));

    service.updateStatus(mockData.id)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });


});
