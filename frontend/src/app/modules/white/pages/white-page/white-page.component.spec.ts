import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitePageComponent } from './white-page.component';

describe('WhitePageComponent', () => {
  let component: WhitePageComponent;
  let fixture: ComponentFixture<WhitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
