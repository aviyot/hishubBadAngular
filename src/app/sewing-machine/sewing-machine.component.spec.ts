import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SewingMachineComponent } from './sewing-machine.component';

describe('SewingMachineComponent', () => {
  let component: SewingMachineComponent;
  let fixture: ComponentFixture<SewingMachineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
