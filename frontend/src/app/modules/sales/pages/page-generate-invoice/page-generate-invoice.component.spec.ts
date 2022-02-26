import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGenerateInvoiceComponent } from './page-generate-invoice.component';

describe('PageGenerateInvoiceComponent', () => {
  let component: PageGenerateInvoiceComponent;
  let fixture: ComponentFixture<PageGenerateInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGenerateInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGenerateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
