import { TestBed } from '@angular/core/testing';

import { PieceServiceService } from './piece-service.service';

describe('PieceServiceService', () => {
  let service: PieceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PieceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
