import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFurnitureComponent } from './list-furniture.component';

describe('ListFurnitureComponent', () => {
  let component: ListFurnitureComponent;
  let fixture: ComponentFixture<ListFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
