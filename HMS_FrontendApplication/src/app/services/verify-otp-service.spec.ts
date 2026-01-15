import { TestBed } from '@angular/core/testing';

import { VerifyOtpService } from './verify-otp-service';

describe('VerifyOtpService', () => {
  let service: VerifyOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
