import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { CheckCustomerReturnsComponent } from './check-customer-returns.component';

describe('CheckCustomerReturnsComponent', () => {
  let component: CheckCustomerReturnsComponent;
  let fixture: ComponentFixture<CheckCustomerReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCustomerReturnsComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
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

  it('should return invalid returnCustomerForm', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.returnCustomerForm;
    const nit = form.controls['nit'];
    nit.setValue(null);
    expect(form.invalid).toBeTrue();
  });

  it('should return valid returnCustomerForm', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.returnCustomerForm;
    const nit = form.controls['nit'];
    nit.setValue('1010101001');
    const date1 = form.controls['date1'];
    date1.setValue('01-10-2022');
    const date2 = form.controls['date2'];
    date2.setValue('10-01-2022');
    expect(form.valid).toBeTrue();
  });
});
