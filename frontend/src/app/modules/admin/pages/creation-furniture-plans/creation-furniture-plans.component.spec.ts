import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationFurniturePlansComponent } from './creation-furniture-plans.component';

describe('CreationFurniturePlansComponent', () => {
  let component: CreationFurniturePlansComponent;
  let fixture: ComponentFixture<CreationFurniturePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFurniturePlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
