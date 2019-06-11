import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcWidthComponent } from './calc-width.component';

describe('CalcWidthComponent', () => {
  let component: CalcWidthComponent;
  let fixture: ComponentFixture<CalcWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
