import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterFurnitureReturnComponent } from './register-furniture-return.component';

describe('RegisterFurnitureReturnComponent', () => {
  let component: RegisterFurnitureReturnComponent;
  let fixture: ComponentFixture<RegisterFurnitureReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFurnitureReturnComponent, ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFurnitureReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid invoiceForm', () => {
    fixture = TestBed.createComponent(RegisterFurnitureReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.invoiceForm;
    const noInvoice = form.controls['noInvoice'];
    noInvoice.setValue('hola');
    expect(form.invalid).toBeTrue();
  });

  it('should return valid invoiceForm', () => {
    fixture = TestBed.createComponent(RegisterFurnitureReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.invoiceForm;
    const noInvoice = form.controls['noInvoice'];
    noInvoice.setValue('1010');
    expect(form.valid).toBeTrue();
  });
});
