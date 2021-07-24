import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SewingTypeComponent } from './sewing-type.component';

describe('SewingTypeComponent', () => {
  let component: SewingTypeComponent;
  let fixture: ComponentFixture<SewingTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SewingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
