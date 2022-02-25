import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultInvoicesComponent } from './consult-invoices.component';

describe('ConsultInvoicesComponent', () => {
  let component: ConsultInvoicesComponent;
  let fixture: ComponentFixture<ConsultInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
