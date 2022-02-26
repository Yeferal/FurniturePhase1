import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCustomerReturnsComponent } from './check-customer-returns.component';

describe('CheckCustomerReturnsComponent', () => {
  let component: CheckCustomerReturnsComponent;
  let fixture: ComponentFixture<CheckCustomerReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCustomerReturnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
