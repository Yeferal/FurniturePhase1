/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlanService } from './plan.service';

describe('Service: Plan', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanService],
      imports: [
        HttpClientTestingModule,
        SharedModule
      ]
    });
  });

  it('should ...', inject([PlanService], (service: PlanService) => {
    expect(service).toBeTruthy();
  }));
});
