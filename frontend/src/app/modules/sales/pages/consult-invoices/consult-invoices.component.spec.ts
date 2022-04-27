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

  it('should return true is changes openContent', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const openContent = component.openContent;
    component.openCont();
    const openContent2 = component.openContent;
    expect(openContent2).toEqual(!openContent)
  });

  it('should return true is changes searchInvoices() form Invalid', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.formInvoices;
    const noInvoices = form.controls['noInvoices'];
    noInvoices.setValue(null);
    component.searchInvoices();
    expect(form.invalid).toBeTrue();
  });

  it('should return true is changes searchInvoices() form Valid', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.formInvoices;
    const noInvoices = form.controls['noInvoices'];
    noInvoices.setValue('1');
    component.searchInvoices();
    expect(form.invalid).toBeFalse();
  });

  it('should return true is page changes from nextPage()', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPage();
    const nextpage = component.page;
    expect(nextpage).toBe(1);
  });

  it('should return true is page changes from prevPage()', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
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
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = 3;
    component.setPage(3);
    const setpage = component.page;
    expect(setpage).toBe(page);
  });

  it('should counter return changes of array true', () => {
    fixture = TestBed.createComponent(ConsultInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const counter = component.counter(1);
    expect(counter).toBeInstanceOf(Array);
  });


});
