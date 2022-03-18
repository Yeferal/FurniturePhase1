import { TestBed } from '@angular/core/testing';

import { FurnitureReturnService } from './furniture-return.service';

describe('FurnitureReturnService', () => {
  let service: FurnitureReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurnitureReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
