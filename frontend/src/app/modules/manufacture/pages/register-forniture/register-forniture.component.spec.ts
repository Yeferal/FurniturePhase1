import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { event } from 'jquery';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { Plan, Assigment } from "src/app/core/models/plan";

import { RegisterFornitureComponent } from './register-forniture.component';
import { Piece } from 'src/app/core/models/piece';

describe('RegisterFornitureComponent', () => {
  let component: RegisterFornitureComponent;
  let fixture: ComponentFixture<RegisterFornitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFornitureComponent ],
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
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid fornitureForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const price = form.controls['price'];
    price.setValue('hola');

    expect(form.invalid).toBeTrue();
  });

  it('should return valid fornitureForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const name = form.controls['name'];
    name.setValue('mueble1');
    const price = form.controls['price'];
    price.setValue('10');
    const creationDate = form.controls['creationDate'];
    creationDate.setValue('2022-10-03');
    const code = form.controls['code'];
    code.setValue('100');
    const assemblyUser = form.controls['assemblyUser'];
    assemblyUser.setValue('100');
    const description = form.controls['description'];
    description.setValue('Muebles 1000');
    expect(form.valid).toBeTrue();
  });

  it('should return invalid pieceForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const namePlan = form.controls['namePlan'];
    namePlan.setValue(null);

    expect(form.invalid).toBeTrue();
    
  });

  it('should return valid pieceForm', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.planForm;
    const namePlan = form.controls['namePlan'];
    namePlan.setValue('Plan');

    expect(form.valid).toBeTrue();
  });

  // it('should return true if captureFile()', () => {
  //   fixture = TestBed.createComponent(RegisterFornitureComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();

  //   const imgElement = fixture.debugElement.query(By.css('img.selimg'));
  //   // imgElement.attributes.src = '../../../assets/img/undraw_photos_re_pvh3.svg';
  //   const btnElement = fixture.debugElement.query(By.css('input.sel'));
  //   // btnElement.nativeElement.changes;

  //   const fileCapture = component.fileCapture;
  //   console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfad');

  //   // expect(fileCapture).not.toEqual(null)
  //   // expect(component.captureFile).toHaveBeenCalled();
  // });

  it('should return invalid addForniture()', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    component.addForniture();

    expect(form.invalid).toBeTrue();
  });

  it('should return invalid addForniture()', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const name = form.controls['name'];
    name.setValue('mueble1');
    const price = form.controls['price'];
    price.setValue('10');
    const creationDate = form.controls['creationDate'];
    creationDate.setValue('2022-10-03');
    const code = form.controls['code'];
    code.setValue('100');
    const assemblyUser = form.controls['assemblyUser'];
    assemblyUser.setValue('100');
    const description = form.controls['description'];
    description.setValue('Muebles 1000');
    component.files.push(1);
    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      status: false
    }
    component.planSelected = plan;
    component.addForniture();

    expect(component.files.length == 0).toBeFalse();
  });

  it('should return true is form not null addForniture()', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.fornitureForm;
    const name = form.controls['name'];
    name.setValue('mueble1');
    const price = form.controls['price'];
    price.setValue('10');
    const creationDate = form.controls['creationDate'];
    creationDate.setValue('2022-10-03');
    const code = form.controls['code'];
    code.setValue('100');
    const assemblyUser = form.controls['assemblyUser'];
    assemblyUser.setValue('100');
    const description = form.controls['description'];
    description.setValue('Muebles 1000');
    component.files.push(1);
    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      status: false
    }
    component.planSelected = plan;
    component.addForniture();

    expect(component.furnitureS != null).toBeTrue();
  });

  it('should return true if deletePiece delete piece ', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.deletePiece(0);

    expect(component.listPieces.filter(Piece => Piece.id = 0) == undefined).toBeFalse();
  });


  it('should return true is equals addPlan(0) tu data == plan[0]', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      status: false
    }
    component.listPlans.push(plan);
    // component.planSelected = plan;
    component.addPlan(0);

    expect(component.planSelected).toEqual(plan);
  });

  it('should return true is equals addPlan(0) tu data == plan[0] OF cost 0', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      assignments: [],
      status: false
    }
    component.listPlans.push(plan);
    // component.planSelected = plan;
    component.calculatePlanCost();

    expect(component.totalCost == 0).toBeTrue();
  });

  it('should return true is equals addPlan(0) tu data == plan[0] cost != 0', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    const piece = new Piece();
    piece.price = 10;

    const assignments: Assigment = {
      amount: 10,
      id: 0,
      piece: piece,
      plan: new Plan()
    }

    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      assignments: [assignments],
      status: false
    }
    component.listPlans.push(plan);
    component.listAssignments.push(assignments);
    // component.planSelected = plan;
    component.calculatePlanCost();

    expect(assignments.piece.price!=undefined).toBeTrue();
  });

  it('should return true is equals addPlan(0) tu data == plan[0] cost == 0', () => {
    fixture = TestBed.createComponent(RegisterFornitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    const piece = new Piece();
    // piece.price = 10;

    const assignments: Assigment = {
      amount: 10,
      id: 0,
      piece: piece,
      plan: new Plan()
    }

    const plan: Plan  = {
      id: 1,
      name: '',
      description: '',
      cost: 100,
      assignments: [assignments],
      status: false
    }
    component.listPlans.push(plan);
    component.listAssignments.push(assignments);
    // component.planSelected = plan;
    component.calculatePlanCost();

    expect(assignments.piece.price == undefined).toBeTrue();
  });

});
