import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFornitureComponent } from './register-forniture.component';

describe('RegisterFornitureComponent', () => {
  let component: RegisterFornitureComponent;
  let fixture: ComponentFixture<RegisterFornitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFornitureComponent ]
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
});
