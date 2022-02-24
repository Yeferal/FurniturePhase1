import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOfDayComponent } from './sales-of-day.component';

describe('SalesOfDayComponent', () => {
  let component: SalesOfDayComponent;
  let fixture: ComponentFixture<SalesOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOfDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
