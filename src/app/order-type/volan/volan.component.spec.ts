import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VolanComponent } from './volan.component';

describe('VolanComponent', () => {
  let component: VolanComponent;
  let fixture: ComponentFixture<VolanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VolanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
