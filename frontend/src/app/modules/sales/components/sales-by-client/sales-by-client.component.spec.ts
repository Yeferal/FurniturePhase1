import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesByClientComponent } from './sales-by-client.component';

describe('SalesByClientComponent', () => {
  let component: SalesByClientComponent;
  let fixture: ComponentFixture<SalesByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
