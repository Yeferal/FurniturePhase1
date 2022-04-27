import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { EarningsComponent } from './earnings.component';

describe('EarningsComponent', () => {
  let component: EarningsComponent;
  let fixture: ComponentFixture<EarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarningsComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid formFilter', () => {
    fixture = TestBed.createComponent(EarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    expect(form.valid).toBeTrue();
  });

  it('should return valid formFilter', () => {
    fixture = TestBed.createComponent(EarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('01-10-2022');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('10-10-2022');
    expect(form.valid).toBeTrue();
  });

  it('should return true if dateStart > dateEnd', () => {
    fixture = TestBed.createComponent(EarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-10');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-01');
    component.getEarnings();

    expect(form.get('dateStart')?.value > form.get('dateEnd')?.value).toBeTrue();
    
  });

  it('should return false if dateStart < dateEnd', () => {
    fixture = TestBed.createComponent(EarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('2022-10-01');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('2022-10-10');
    component.getEarnings();

    expect(form.get('dateStart')?.value > form.get('dateEnd')?.value).toBeFalse();
    
  });
});
