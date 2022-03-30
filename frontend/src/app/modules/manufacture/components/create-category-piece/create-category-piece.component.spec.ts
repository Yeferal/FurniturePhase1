import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreateCategoryPieceComponent } from './create-category-piece.component';

describe('CreateCategoryPieceComponent', () => {
  let component: CreateCategoryPieceComponent;
  let fixture: ComponentFixture<CreateCategoryPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCategoryPieceComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ]
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

  it('should return valid form', () => {
    fixture = TestBed.createComponent(CreateCategoryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.categoryForm;
    const nameCategory = component.categoryForm.controls['name'];
    nameCategory.setValue('tornillo');
    expect(form.valid).toBeTrue();
  })

  it('should return invalid form', () => {
    fixture = TestBed.createComponent(CreateCategoryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.categoryForm;
    const nameCategory = component.categoryForm.controls['name'];
    nameCategory.setValue(null);
    expect(form.invalid).toBeTrue();
  })

  it('should return true is correct data', () => {
    fixture = TestBed.createComponent(CreateCategoryPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.categoryForm;
    const nameCategory = component.categoryForm.controls['name'];
    nameCategory.setValue('tornillo');

    const btnElement = fixture.debugElement.query(By.css('a.btn'));
    btnElement.nativeElement.click();
    const testData = { name: 'tornillo'}
    expect(form.value).toEqual(testData);
  })

});
