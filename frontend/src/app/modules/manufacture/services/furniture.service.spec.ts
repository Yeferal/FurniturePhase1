import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { FurnitureService } from './furniture.service';

describe('FurnitureService', () => {
  let service: FurnitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(FurnitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
