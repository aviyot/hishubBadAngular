import { TestBed } from '@angular/core/testing';

import { BadService } from './bad.service';

describe('BadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadService = TestBed.get(BadService);
    expect(service).toBeTruthy();
  });
});
