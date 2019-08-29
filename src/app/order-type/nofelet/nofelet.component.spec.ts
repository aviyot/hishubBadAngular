import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NofeletComponent } from './nofelet.component';

describe('NofeletComponent', () => {
  let component: NofeletComponent;
  let fixture: ComponentFixture<NofeletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NofeletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NofeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
