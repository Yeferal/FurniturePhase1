import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { SalesOfDayComponent } from './sales-of-day.component';

describe('SalesOfDayComponent', () => {
  let component: SalesOfDayComponent;
  let fixture: ComponentFixture<SalesOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOfDayComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return true is getSalesToday()', () => {
  //   fixture = TestBed.createComponent(SalesOfDayComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

    
  // });

  it('should return true is page changes from nextPage()', () => {
    fixture = TestBed.createComponent(SalesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = component.page;
    component.nextPage();
    const nextpage = component.page;
    expect(nextpage).toBe(1);
  });

  it('should return true is page changes from prevPage()', () => {
    fixture = TestBed.createComponent(SalesOfDayComponent);
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
    fixture = TestBed.createComponent(SalesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const page = 3;
    component.setPage(3);
    const setpage = component.page;
    expect(setpage).toBe(page);
  });

  it('should counter return changes of array true', () => {
    fixture = TestBed.createComponent(SalesOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const counter = component.counter(1);
    expect(counter).toBeInstanceOf(Array);
  });
});
