import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureInformationComponent } from './furniture-information.component';

describe('FurnitureInformationComponent', () => {
  let component: FurnitureInformationComponent;
  let fixture: ComponentFixture<FurnitureInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
