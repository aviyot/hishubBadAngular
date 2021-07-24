import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TfiraComponent } from './tfira.component';

describe('TfiraComponent', () => {
  let component: TfiraComponent;
  let fixture: ComponentFixture<TfiraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TfiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
