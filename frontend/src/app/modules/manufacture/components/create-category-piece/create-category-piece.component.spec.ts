import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryPieceComponent } from './create-category-piece.component';

describe('CreateCategoryPieceComponent', () => {
  let component: CreateCategoryPieceComponent;
  let fixture: ComponentFixture<CreateCategoryPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryPieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCategoryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
