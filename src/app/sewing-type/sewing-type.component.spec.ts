import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingTypeComponent } from './sewing-type.component';

describe('SewingTypeComponent', () => {
  let component: SewingTypeComponent;
  let fixture: ComponentFixture<SewingTypeComponent>;

  beforeEach(async(() => {
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
