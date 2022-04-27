import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { SalesByClientComponent } from './sales-by-client.component';

describe('SalesByClientComponent', () => {
  let component: SalesByClientComponent;
  let fixture: ComponentFixture<SalesByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesByClientComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
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

  it('should return invalid formFilter', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    expect(form.invalid).toBeTrue();
  });

  it('should return valid formFilter', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-01');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-10');
    const name = form.controls['name'];
    name.setValue('cliente');
    expect(form.valid).toBeTrue();
  });


  it('should return false if getSalesByClient() formFilter invalid ', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-01');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-10');
    const name = form.controls['name'];
    name.setValue('cliente');
    component.getSalesByClient();
    expect(form.invalid).toBeFalse();
  });

  it('should return true if getSalesByClient() formFilter valid ', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue(null);
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('10-10-2022');
    const name = form.controls['name'];
    name.setValue('cliente');
    component.getSalesByClient();
    expect(form.invalid).toBeTrue();
    // expect(component.msjError).not.toBeUndefined();
  });

  it('should return true if dateStart > dateEnd', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-10');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-01');
    const name = form.controls['name'];
    name.setValue('cliente');
    component.getSalesByClient();

    expect(form.get('dateStart')?.value > form.get('dateEnd')?.value).toBeTrue();
    
  });

  it('should return false if dateStart < dateEnd', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-01');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-10');
    const name = form.controls['name'];
    name.setValue('cliente');
    component.getSalesByClient();

    expect(form.get('dateStart')?.value > form.get('dateEnd')?.value).toBeFalse();
    
  });

  it('should return true if data changes', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    component.getDetail(1);
    const pageD = component.pageD;
    const idBill = component.idBill;

    expect(pageD).toEqual(0);
    expect(idBill).toEqual(1);

  });

  it('should return true is page changes from nextPage()', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPage();
    const nextpage = component.page;
    expect(nextpage).toBe(1);
  });

  it('should return true is page changes from prevPage()', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
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
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = 3;
    component.setPage(3);
    const setpage = component.page;
    expect(setpage).toBe(page);
  });

  it('should counter return changes of array true', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const counter = component.counter(1);
    expect(counter).toBeInstanceOf(Array);
  });

  it('should return true is page changes from nextPageDetail()', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPageDetail();
    const nextpage = component.page;
    expect(nextpage).toBe(1);
  });

  it('should return true is page changes from prevPageDetail()', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPageDetail();
    component.nextPageDetail();
    component.prevPageDetail();
    const prevpage = component.page;
    expect(prevpage).toBe(1);
  });

  it('should return true is page changes from setPageDetail()', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = 3;
    component.setPageDetail(3);
    const setpage = component.page;
    expect(setpage).toBe(page);
  });

  it('should counterDetail return changes of array  true', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const counter = component.counterDetail(1);
    expect(counter).toBeInstanceOf(Array);
  });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

  // it('should return ', () => {
  //   fixture = TestBed.createComponent(SalesByClientComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
    
  // });

});
