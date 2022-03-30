import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FurnitureReturnService } from './furniture-return.service';

describe('FurnitureReturnService', () => {
  let service: FurnitureReturnService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(FurnitureReturnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
