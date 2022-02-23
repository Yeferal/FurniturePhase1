import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceInformationComponent } from './piece-information.component';

describe('PieceInformationComponent', () => {
  let component: PieceInformationComponent;
  let fixture: ComponentFixture<PieceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
