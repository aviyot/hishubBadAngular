import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SizeOrderComponent } from './size-order.component';

describe('SizeOrderComponent', () => {
  let component: SizeOrderComponent;
  let fixture: ComponentFixture<SizeOrderComponent>;

  beforeEach(waitForAsync(() => {
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
