import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLostComponent } from './register-lost.component';

describe('RegisterLostComponent', () => {
  let component: RegisterLostComponent;
  let fixture: ComponentFixture<RegisterLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLostComponent ]
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
});
