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

  it('should return true is openCont changes', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.openCont();
    const openContAux = component.openContent;
    expect(openContAux).toBeTrue();
  });

  it('should return true is valid returnCustomerForm changes', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.returnCustomerForm;
    const nit = form.controls['nit'];
    nit.setValue('1010101001');
    const date1 = form.controls['date1'];
    date1.setValue('10-10-2022');
    const date2 = form.controls['date2'];
    date2.setValue('10-01-2022');
    component.serchReturns();
    const returnCustomerForm = component.returnCustomerForm;
    expect(returnCustomerForm.valid).toBeTrue();
  });

  it('should return true is true returnCustomerForm date1 > date2 changes', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.returnCustomerForm;
    const nit = form.controls['nit'];
    nit.setValue('1010101001');
    const date1 = form.controls['date1'];
    date1.setValue('10-10-2022');
    const date2 = form.controls['date2'];
    date2.setValue('10-01-2022');
    component.serchReturns();
    const returnCustomerForm = component.returnCustomerForm;
    expect(date1.value > date2.value).toBeTrue();
  });

  it('should return true is data Tmps is changes', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.returnCustomerForm;
    const nit = form.controls['nit'];
    nit.setValue('1010101001');
    const date1 = form.controls['date1'];
    date1.setValue('2022-10-01');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    

    component.serchReturns();
    
    const dateTmp1 = component.dateTmp1;
    const dateTmp2 = form.get('date2')?.value;
    const nitTmp = form.get('nit')?.value;
    const errorForm = false;
    
    expect(dateTmp1).not.toBeUndefined();
    expect(dateTmp2).not.toBeUndefined();
    expect(nitTmp).not.toBeUndefined();
    expect(errorForm).toBeFalse();
    
  });

  it('should return true is invalid returnCustomerForm changes', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.serchReturns();
    const returnCustomerForm = component.returnCustomerForm;
    expect(returnCustomerForm.invalid).toBeTrue();
  });

  it('should return true is page changes from nextPage()', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPage();
    const nextpage = component.page;
    expect(nextpage).toBe(1);
  });

  it('should return true is page changes from prevPage()', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPage();
    component.nextPage();
    component.prevPage();
    const prevpage = component.page;
    expect(prevpage).toBe(1);
  });

  it('should return true is page changes from setPage()', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = 3;
    component.setPage(3);
    const setpage = component.page;
    expect(setpage).toBe(page);
  });

  it('should counter return changes of array true', () => {
    fixture = TestBed.createComponent(CheckCustomerReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const counter = component.counter(1);
    expect(counter).toBeInstanceOf(Array);
  });
});
