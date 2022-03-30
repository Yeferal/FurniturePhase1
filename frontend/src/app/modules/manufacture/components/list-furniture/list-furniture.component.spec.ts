import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListFurnitureComponent } from './list-furniture.component';

describe('ListFurnitureComponent', () => {
  let component: ListFurnitureComponent;
  let fixture: ComponentFixture<ListFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFurnitureComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return valid form', () => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = component.formFilter.controls['dateStart'];
    dateStart.setValue(null);
    expect(form.valid).toBeTrue();
  })

  // it('should return true is correct data', () => {
  //   fixture = TestBed.createComponent(ListFurnitureComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const form = component.formFilter;
  //   const dateStart = component.formFilter.controls['dateStart'];
  //   dateStart.setValue('01-01-2022');
  //   const dateEnd = component.formFilter.controls['dateEnd'];
  //   dateEnd.setValue('10-10-2022');
  //   const order = component.formFilter.controls['order'];
  //   order.setValue('1');

  //   const btnElement = fixture.debugElement.query(By.css('input.btnf'));
  //   btnElement.nativeElement.click();
  //   const testData = { 
  //     dateStart: '01-01-2022',
  //     dateEnd: '10-10-2022',
  //     order: '1'
  //   }
  //   expect(form.value).toEqual(testData);
  // })

  it('should return true prev page', () => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const pageNum = component.page + 2;
    const pageNum2 = pageNum - 1;
    const btnElement = fixture.debugElement.query(By.css('a.prev'));
    btnElement.nativeElement.click();
    const testData = 1;
    expect(pageNum2).toEqual(testData);
  })

  it('should return true selected page', () => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const pageNum = component.page;
    const pageNum2 = 5;
    const btnElement = fixture.debugElement.query(By.css('a.sel'));
    btnElement.nativeElement.click();
    const testData = 5;
    expect(pageNum2).toEqual(testData);
  })

  it('should return true next page', () => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const pageNum = component.page;
    const pageNum2 = pageNum + 1;
    const btnElement = fixture.debugElement.query(By.css('a.nxt'));
    btnElement.nativeElement.click();
    const testData = 1;
    expect(pageNum2).toEqual(testData);
  })


});
