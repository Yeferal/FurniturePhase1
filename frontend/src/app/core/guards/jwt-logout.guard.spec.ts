import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JwtLogoutGuard } from './jwt-logout.guard';

describe('JwtLogoutGuard', () => {
  let guard: JwtLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        // SessionService
      ]
    });
    guard = TestBed.inject(JwtLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
