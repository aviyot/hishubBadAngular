import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeGziraComponent } from './type-gzira.component';

describe('TypeGziraComponent', () => {
  let component: TypeGziraComponent;
  let fixture: ComponentFixture<TypeGziraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeGziraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeGziraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
