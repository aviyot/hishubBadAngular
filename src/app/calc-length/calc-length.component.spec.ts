import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalcLengthComponent } from './calc-length.component';

describe('CalcLengthComponent', () => {
  let component: CalcLengthComponent;
  let fixture: ComponentFixture<CalcLengthComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
