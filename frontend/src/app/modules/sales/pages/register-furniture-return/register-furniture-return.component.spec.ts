import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFurnitureReturnComponent } from './register-furniture-return.component';

describe('RegisterFurnitureReturnComponent', () => {
  let component: RegisterFurnitureReturnComponent;
  let fixture: ComponentFixture<RegisterFurnitureReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFurnitureReturnComponent ]
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
});
