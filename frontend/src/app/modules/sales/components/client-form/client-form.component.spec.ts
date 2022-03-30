import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { ClientFormComponent } from './client-form.component';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid clientForm', () => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.clientForm;
    const clientNit = form.controls['clientNit'];
    clientNit.setValue('hola');
    expect(form.invalid).toBeTrue();
  });

  it('should return valid clientForm', () => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.clientForm;
    const clientNit = form.controls['clientNit'];
    clientNit.setValue('1010101010');
    const clientFullName = form.controls['clientFullName'];
    clientFullName.setValue('Cliente 1');
    const clientAddress = form.controls['clientAddress'];
    clientAddress.setValue('Direccion');
    expect(form.valid).toBeTrue();
  });

});
