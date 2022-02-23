import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPiecesComponent } from './page-list-pieces.component';

describe('PageListPiecesComponent', () => {
  let component: PageListPiecesComponent;
  let fixture: ComponentFixture<PageListPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
