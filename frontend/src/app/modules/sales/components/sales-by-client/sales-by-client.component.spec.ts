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
    expect(form.valid).toBeTrue();
  });

  it('should return valid formFilter', () => {
    fixture = TestBed.createComponent(SalesByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formFilter;
    const dateStart = form.controls['dateStart'];
    dateStart.setValue('01-10-2022');
    const dateEnd = form.controls['dateEnd'];
    dateEnd.setValue('10-10-2022');
    const name = form.controls['name'];
    name.setValue('cliente');
    expect(form.valid).toBeTrue();
  });
});
