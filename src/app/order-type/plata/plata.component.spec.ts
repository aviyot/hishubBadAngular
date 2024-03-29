import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlataComponent } from './plata.component';

describe('PlataComponent', () => {
  let component: PlataComponent;
  let fixture: ComponentFixture<PlataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
