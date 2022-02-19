import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPiecesComponent } from './list-pieces.component';

describe('ListPiecesComponent', () => {
  let component: ListPiecesComponent;
  let fixture: ComponentFixture<ListPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
