import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { PieceFormComponent } from './piece-form.component';

describe('PieceFormComponent', () => {
  let component: PieceFormComponent;
  let fixture: ComponentFixture<PieceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieceFormComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid pieceForm', () => {
    fixture = TestBed.createComponent(PieceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.pieceForm;
    const pieceAmount = form.controls['pieceAmount'];
    pieceAmount.setValue('hola');
    expect(form.invalid).toBeTrue();
  });

  it('should return valid pieceForm', () => {
    fixture = TestBed.createComponent(PieceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.pieceForm;
    const pieceName = form.controls['pieceName'];
    pieceName.setValue('pieza1');
    const pieceCategory = form.controls['pieceCategory'];
    pieceCategory.setValue('Tornillo');
    const pieceAmount = form.controls['pieceAmount'];
    pieceAmount.setValue('10');
    // const piecePrice = form.controls['piecePrice'];
    // piecePrice.setValue('10.2');
    const pieceCost = form.controls['pieceCost'];
    pieceCost.setValue('2.20');
    expect(form.valid).toBeTrue();
  });

});
