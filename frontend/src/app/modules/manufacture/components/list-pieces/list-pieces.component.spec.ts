import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';

import { ListPiecesComponent } from './list-pieces.component';

describe('ListPiecesComponent', () => {
  let component: ListPiecesComponent;
  let fixture: ComponentFixture<ListPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPiecesComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule,
        NgxPaginationModule
      ]
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

  it('should return invalid formProvide', () => {
    fixture = TestBed.createComponent(ListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formProvide;
    const totalProvide = form.controls['totalProvide'];
    totalProvide.setValue('10');
    expect(form.invalid).toBeTrue();
  })

  it('should return valid formProvide', () => {
    fixture = TestBed.createComponent(ListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formProvide;
    const totalProvide = form.controls['totalProvide'];
    totalProvide.setValue('10');
    const cost = form.controls['cost'];
    cost.setValue('100');
    expect(form.valid).toBeTrue();
  })

  it('should return invalid formRemove', () => {
    fixture = TestBed.createComponent(ListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formRemove;
    const totalRemove = form.controls['totalRemove'];
    totalRemove.setValue('hola');
    expect(form.invalid).toBeTrue();
  });

  it('should return valid formRemove', () => {
    fixture = TestBed.createComponent(ListPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formRemove;
    const totalRemove = form.controls['totalRemove'];
    totalRemove.setValue('10');
    expect(form.valid).toBeTrue();
  });

});
