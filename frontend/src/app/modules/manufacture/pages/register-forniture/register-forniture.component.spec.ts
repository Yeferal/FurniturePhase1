import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterFornitureComponent } from './register-forniture.component';

describe('RegisterFornitureComponent', () => {
  let component: RegisterFornitureComponent;
  let fixture: ComponentFixture<RegisterFornitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFornitureComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule,
        NgxPaginationModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid fornitureForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const price = form.controls['price'];
    price.setValue('hola');

    expect(form.invalid).toBeTrue();
  });

  it('should return valid fornitureForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const name = form.controls['name'];
    name.setValue('mueble1');
    const price = form.controls['price'];
    price.setValue('10');
    const creationDate = form.controls['creationDate'];
    creationDate.setValue('10-03-2022');
    const code = form.controls['code'];
    code.setValue('100');
    const assemblyUser = form.controls['assemblyUser'];
    assemblyUser.setValue('100');
    const description = form.controls['description'];
    description.setValue('Muebles 1000');
    expect(form.valid).toBeTrue();
  });

  it('should return invalid pieceForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const namePlan = form.controls['namePlan'];
    namePlan.setValue(null);

    expect(form.invalid).toBeTrue();
    
  });

  it('should return valid pieceForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const namePlan = form.controls['namePlan'];
    namePlan.setValue('Plan');

    expect(form.valid).toBeTrue();
  });

});
