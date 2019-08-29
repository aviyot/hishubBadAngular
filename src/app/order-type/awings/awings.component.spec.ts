import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwingsComponent } from './awings.component';

describe('AwingsComponent', () => {
  let component: AwingsComponent;
  let fixture: ComponentFixture<AwingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
