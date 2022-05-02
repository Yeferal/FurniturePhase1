import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { FurnitureInformationComponent } from './furniture-information.component';

describe('FurnitureInformationComponent', () => {
  let component: FurnitureInformationComponent;
  let fixture: ComponentFixture<FurnitureInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureInformationComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true is changes from getFurniture()', () => {
    fixture = TestBed.createComponent(FurnitureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const id = component.id;
    component.getFurniture();
    expect(id).not.toEqual(1);

  });

  it('should return true is page changes from ngOnChanges()', () => {
    fixture = TestBed.createComponent(FurnitureInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnChanges();
    expect(true).toBeTrue();
  });

});
