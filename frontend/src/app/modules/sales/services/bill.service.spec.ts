import { HttpClientTestingModule } from '@angular/common/http/testing';
import { not } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { Pageable } from 'src/app/core/models/pageable';

import { BillService } from './bill.service';

describe('BillService', () => {
  let service: BillService;
  let httpClientSpy: {get: jasmine.Spy}
  

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    // service = TestBed.inject(BillService);
    service = new BillService(httpClientSpy as any);
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

  it('should be return objet type Page', (done: DoneFn) => {
    const mockData = {
      date1: '2022-10-01',
      date2: '2022-10-10',
      nit: '1',
      page: '0'
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getReturnClient(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );

  });



});



