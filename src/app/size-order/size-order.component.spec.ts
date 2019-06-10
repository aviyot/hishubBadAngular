import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeOrderComponent } from './size-order.component';

describe('SizeOrderComponent', () => {
  let component: SizeOrderComponent;
  let fixture: ComponentFixture<SizeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
