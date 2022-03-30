import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterLostComponent } from './register-lost.component';

describe('RegisterLostComponent', () => {
  let component: RegisterLostComponent;
  let fixture: ComponentFixture<RegisterLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLostComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid returnForm', () => {
    fixture = TestBed.createComponent(RegisterLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.returnForm;
    const nitClient = form.controls['nitClient'];
    nitClient.setValue(null);
    expect(form.invalid).toBeTrue();
  });

  it('should return valid returnForm', () => {
    fixture = TestBed.createComponent(RegisterLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.returnForm;
    const nitClient = form.controls['nitClient'];
    nitClient.setValue('1010101001');
    const date1 = form.controls['date1'];
    date1.setValue('03-10-2022');
    const codeProduct = form.controls['codeProduct'];
    codeProduct.setValue('1001');
    const amount = form.controls['amount'];
    amount.setValue('1');
    expect(form.valid).toBeTrue();
  });
});
