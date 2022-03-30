import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreationFurniturePlansComponent } from './creation-furniture-plans.component';

describe('CreationFurniturePlansComponent', () => {
  let component: CreationFurniturePlansComponent;
  let fixture: ComponentFixture<CreationFurniturePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationFurniturePlansComponent ],
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
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid planForm', () => {
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const name = form.controls['name'];
    name.setValue(null);
    expect(form.invalid).toBeTrue();
  });

  it('should return valid planForm', () => {
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const name = form.controls['name'];
    name.setValue('Mueble1');
    const description = form.controls['description'];
    description.setValue('Plano nuevo');
    expect(form.valid).toBeTrue();
  });

  it('should return invalid pieceForm', () => {
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.pieceForm;
    const amount = form.controls['amount'];
    amount.setValue(null);
    expect(form.invalid).toBeTrue();
  });

  it('should return valid pieceForm', () => {
    fixture = TestBed.createComponent(CreationFurniturePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.pieceForm;
    const amount = form.controls['amount'];
    amount.setValue('2');
    expect(form.valid).toBeTrue();
  });

});
