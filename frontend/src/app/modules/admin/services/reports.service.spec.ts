/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { Furniture } from 'src/app/core/models/furniture';
import { Page } from 'src/app/core/models/page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsService } from './reports.service';

describe('Service: Reports', () => {
  let service: ReportsService;
  let httpClientSpy: {get: jasmine.Spy};

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers: [ReportsService],
      imports: [
        HttpClientTestingModule,
        SharedModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ReportsService(httpClientSpy as any);
  });

  it('should ...', inject([ReportsService], (service: ReportsService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return object correct report sales', (done: DoneFn) => {

  //   const mockResult = {
  //     page: new Page()

  //   }

  //   httpClientSpy.get.and.returnValue(of(mockResult));
  //   const data = {
  //     page: 0,
  //     date1: '01-01-2022',
  //     date2: '01-10-2022'
  //   }
  //   service.getReportSalesXPeriod(data)
  //     .subscribe(
  //       res => {
  //         expect(res).toEqual(mockResult);
  //         done()
  //       }
  //     );
  // });

  // it('should return object correct report earnings', (done: DoneFn) => {

  //   const mockResult = {
  //     page: new Page()

  //   }

  //   httpClientSpy.get.and.returnValue(of(mockResult));
  //   const data = {
  //     page: 0,
  //     date1: '01-01-2022',
  //     date2: '01-10-2022'
  //   }
  //   service.getReportEarningsXPeriod(data)
  //     .subscribe(
  //       res => {
  //         expect(res).toEqual(mockResult);
  //         done()
  //       }
  //     );
  // });

  // it('should return object correct report Min Furniture', (done: DoneFn) => {

  //   const mockResult = {items: []};

  //   httpClientSpy.get.and.returnValue(of(mockResult));
  //   const data = {
  //     page: 0,
  //     date1: '01-01-2022',
  //     date2: '01-10-2022'
  //   }
  //   service.getReportMinFurnitureXPeriod(data)
  //     .subscribe(
  //       res => {
  //         expect(res).toEqual(mockResult);
  //         done()
  //       }
  //     );
  // });

  // it('should return object correct report Max Furniture', (done: DoneFn) => {

  //   const mockResult = {items: []};

  //   httpClientSpy.get.and.returnValue(of(mockResult));
  //   const data = {
  //     page: 0,
  //     date1: '01-01-2022',
  //     date2: '01-10-2022'
  //   }
  //   service.getReportMaxFurnitureXPeriod(data)
  //     .subscribe(
  //       res => {
  //         expect(res).toEqual(mockResult);
  //         done()
  //       }
  //     );
  // });

});
