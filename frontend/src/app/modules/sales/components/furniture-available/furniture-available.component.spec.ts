import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureAvailableComponent } from './furniture-available.component';

describe('FurnitureAvailableComponent', () => {
  let component: FurnitureAvailableComponent;
  let fixture: ComponentFixture<FurnitureAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
