import { TestBed } from '@angular/core/testing';

import { HishubService } from './hishub.service';

describe('HishubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HishubService = TestBed.get(HishubService);
    expect(service).toBeTruthy();
  });
});
