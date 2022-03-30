import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { WhitePageComponent } from './white-page.component';

describe('WhitePageComponent', () => {
  let component: WhitePageComponent;
  let fixture: ComponentFixture<WhitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitePageComponent ],
      imports: [
        HttpClientTestingModule,
        SharedModule,
        RouterTestingModule
      ]
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
