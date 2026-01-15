import { TestBed } from '@angular/core/testing';

import { ResetPasswordservice } from './reset-passwordservice';

describe('ResetPasswordservice', () => {
  let service: ResetPasswordservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetPasswordservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
