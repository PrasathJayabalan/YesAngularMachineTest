import { TestBed } from '@angular/core/testing';

import { UserprofService } from './userprof.service';

describe('UserprofService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserprofService = TestBed.get(UserprofService);
    expect(service).toBeTruthy();
  });
});
