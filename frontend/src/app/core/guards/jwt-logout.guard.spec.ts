import { TestBed } from '@angular/core/testing';

import { JwtLogoutGuard } from './jwt-logout.guard';

describe('JwtLogoutGuard', () => {
  let guard: JwtLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JwtLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
