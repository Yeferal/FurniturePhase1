import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { Pageable } from 'src/app/core/models/pageable';

import { SalesService } from './sales-service.service';

describe('SalesService', () => {
  let service: SalesService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    // service = TestBed.inject(SalesService);
    service = new SalesService(httpClientSpy as any);
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

  it('should be true is equals mockPage of service returnValue()', (done: DoneFn) => {
    const mockData = {
      page: '0'
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getSalesToday(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

  it('should be true is equals mockPage of service getSalesClient()', (done: DoneFn) => {
    const mockData = {
      page: 0,
      date1: '2022-10-10',
      date2: '2022-10-10',
      client: 'cliente'
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getSalesClient(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

  it('should be true is equals mockPage of service getBillDetailsClient()', (done: DoneFn) => {
    const mockData = {
      page: 0,
      billId: 1
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getBillDetailsClient(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

  it('should be true is equals mockPage of service getEarningsTotal()', (done: DoneFn) => {
    const mockData = {
      page: 0,
      billId: 1
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getEarningsTotal(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });

});
