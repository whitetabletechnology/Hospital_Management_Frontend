import { TestBed } from '@angular/core/testing';

import { Doctor } from './doctor';

describe('Doctor', () => {
  let service: Doctor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
