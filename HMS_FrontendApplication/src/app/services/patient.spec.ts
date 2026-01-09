import { TestBed } from '@angular/core/testing';

import { Patient } from './patient';

describe('Patient', () => {
  let service: Patient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Patient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
