import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClientOrderComponent } from './client-order.component';

describe('ClientOrderComponent', () => {
  let component: ClientOrderComponent;
  let fixture: ComponentFixture<ClientOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
