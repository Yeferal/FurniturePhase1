/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportsService } from './reports.service';

describe('Service: Reports', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportsService],
      imports: [
        HttpClientTestingModule,
        SharedModule
      ]
    });
  });

  it('should ...', inject([ReportsService], (service: ReportsService) => {
    expect(service).toBeTruthy();
  }));
});
