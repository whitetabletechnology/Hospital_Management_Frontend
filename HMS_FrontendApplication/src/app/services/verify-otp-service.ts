import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class VerifyOtpService {
  private url = 'http://localhost:8080/auth/api/reset';

  constructor(private http: HttpClient) {}

  verifyOtp(email: string, otp: string) {
    return this.http.post<{ message: string }>(`${this.url}/verify-otp`, { email, otp });
  }
}
