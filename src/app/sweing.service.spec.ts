import { TestBed } from '@angular/core/testing';

import { SweingService } from './sweing.service';

describe('SweingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweingService = TestBed.get(SweingService);
    expect(service).toBeTruthy();
  });
});
