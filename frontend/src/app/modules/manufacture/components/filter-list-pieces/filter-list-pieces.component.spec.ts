import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListPiecesComponent } from './filter-list-pieces.component';

describe('FilterListPiecesComponent', () => {
  let component: FilterListPiecesComponent;
  let fixture: ComponentFixture<FilterListPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListPiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
