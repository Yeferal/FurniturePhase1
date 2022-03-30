import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConsultInvoicesComponent } from './consult-invoices.component';

describe('ConsultInvoicesComponent', () => {
  let component: ConsultInvoicesComponent;
  let fixture: ComponentFixture<ConsultInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultInvoicesComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
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

  it('should return invalid formInvoices', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formInvoices;
    const noInvoices = form.controls['noInvoices'];
    noInvoices.setValue(null);
    expect(form.invalid).toBeTrue();
  });

  it('should return valid formInvoices', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formInvoices;
    const noInvoices = form.controls['noInvoices'];
    noInvoices.setValue('1010');
    expect(form.valid).toBeTrue();
  });
});
