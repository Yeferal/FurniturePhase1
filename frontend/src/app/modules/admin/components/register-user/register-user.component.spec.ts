import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterUserComponent } from './register-user.component';

describe('RegisterUserComponent', () => {
  let component: RegisterUserComponent;
  let fixture: ComponentFixture<RegisterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUserComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid formRegister', () => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formRegister;
    const password = form.controls['password'];
    password.setValue('123456789');
    expect(form.invalid).toBeTrue();
  });

  it('should return valid formRegister', () => {
    fixture = TestBed.createComponent(RegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formRegister;
    const name = form.controls['name'];
    name.setValue('usuario');
    const username = form.controls['username'];
    username.setValue('usuario_admin');
    const password = form.controls['password'];
    password.setValue('123456789');
    const passwordConfirm = form.controls['passwordConfirm'];
    passwordConfirm.setValue('123456789');
    const role = form.controls['role'];
    role.setValue('0');
    expect(form.valid).toBeTrue();
  });
  
});
