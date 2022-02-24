import { TestBed } from '@angular/core/testing';

import { SalesServiceService } from './sales-service.service';

describe('SalesServiceService', () => {
  let service: SalesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
