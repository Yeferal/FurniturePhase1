import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Page } from 'src/app/core/models/page';
import { Pageable } from 'src/app/core/models/pageable';

import { InvoicesService } from './invoices.service';

describe('InvoicesService', () => {
  let service: InvoicesService;
  let httpClientSpy: {get: jasmine.Spy}

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    // service = TestBed.inject(InvoicesService);
    service = new InvoicesService(httpClientSpy as any);
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

  it('should be return true if service return is equals Page', (done: DoneFn) => {
    const mockData = {
      billId: '1',
      page: 0
    }

    httpClientSpy.get.and.returnValue(of(mockPage));

    service.getInvoicesCliente(mockData)
      .subscribe(
        res => {
          expect(res).toEqual(mockPage);
          done();
        }
      );
  });

});
