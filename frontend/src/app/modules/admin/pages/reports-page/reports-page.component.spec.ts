/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReportsPageComponent } from './reports-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReportsPageComponent', () => {
  let component: ReportsPageComponent;
  let fixture: ComponentFixture<ReportsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsPageComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid reportForm', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    expect(form.valid).toBeTrue();
  });

  it('should return valid reportForm', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    const date1 = form.controls['date1'];
    date1.setValue('2022-01-10');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    expect(form.valid).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 0', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 0;
    component.getReport()
    expect(component.typeReportSelected == 0).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 1', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 1;
    component.getReport()
    expect(component.typeReportSelected == 1).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 2', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 2;
    component.getReport()
    expect(component.typeReportSelected == 2).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 3', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 3;
    component.getReport()
    expect(component.typeReportSelected == 3).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 4', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 4;
    component.getReport()
    expect(component.typeReportSelected == 4).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 5', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 5;
    component.getReport()
    expect(component.typeReportSelected == 5).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 6', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 6;
    component.getReport()
    expect(component.typeReportSelected == 6).toBeTrue();
  });

  it('should return valid getReport() typeReportSelected = 7', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 7;
    component.getReport()
    expect(component.typeReportSelected == 7).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 0', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 0;
    component.export()
    expect(component.typeReportSelected == 0).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 1', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 1;
    component.export()
    expect(component.typeReportSelected == 1).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 2', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 2;
    component.export()
    expect(component.typeReportSelected == 2).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 3', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 3;
    component.export()
    expect(component.typeReportSelected ==3).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 4', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 4;
    component.export()
    expect(component.typeReportSelected == 4).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 5', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 5;
    component.export()
    expect(component.typeReportSelected == 5).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 6', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 6;
    component.export()
    expect(component.typeReportSelected == 6).toBeTrue();
  });

  it('should return valid export() typeReportSelected = 7', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.typeReportSelected = 7;
    component.export()
    expect(component.typeReportSelected == 7).toBeTrue();
  });

  // it('should return valid export() typeReportSelected = 7', () => {
  //   fixture = TestBed.createComponent(ReportsPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   component.typeReportSelected = 7;
  //   expect(component.export()).toHaveBeenCalled;
  // });

  it('should return called setSelected() ', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const data = {
      target: {
        value: 1
      }
    }
    component.setSelected(data)
    expect(component.typeReportSelected).toEqual(data.target.value);
  });

  it('should return called getReportSales()', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    const date1 = form.controls['date1'];
    date1.setValue('2022-01-10');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    component.page = 0;
    component.getReportSales()
    expect(component.page).toEqual(0);
  });

  it('should return called getReportSales() form null', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getReportSales()
    expect(component.formFilter.valid).toBeTrue();
  });

  it('should return called getReportEarnings()', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    const date1 = form.controls['date1'];
    date1.setValue('2022-01-10');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    component.getReportEarnings();
    expect(form.get('date1')?.value != undefined).toBeTrue();
  });

  it('should return called getReportEarnings() form null', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getReportEarnings();
    expect(component.formFilter.valid).toBeTrue();
  });

  it('should return called getReportMinFurnitureXPeriod()', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    const date1 = form.controls['date1'];
    date1.setValue('2022-01-10');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    component.getReportMinFurnitureXPeriod()
    expect(form.get('date1')?.value != undefined).toBeTrue();
  });

  it('should return called getReportMinFurnitureXPeriod() form null', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getReportMinFurnitureXPeriod();
    expect(component.formFilter.valid).toBeTrue();
  });

  it('should return called getReportMaxFurnitureXPeriod()', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.reportForm;
    const date1 = form.controls['date1'];
    date1.setValue('2022-01-10');
    const date2 = form.controls['date2'];
    date2.setValue('2022-10-10');
    component.getReportMaxFurnitureXPeriod();
    expect(form.get('date1')?.value != undefined).toBeTrue();
  });

  it('should return called getReportMaxFurnitureXPeriod() form null', () => {
    fixture = TestBed.createComponent(ReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getReportMaxFurnitureXPeriod();
    expect(component.formFilter.valid).toBeTrue();
  });
  

});
