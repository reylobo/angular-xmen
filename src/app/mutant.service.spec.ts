import { TestBed } from '@angular/core/testing';

import { MutantService } from './mutant.service';

describe('MutantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutantService = TestBed.get(MutantService);
    expect(service).toBeTruthy();
  });
});
