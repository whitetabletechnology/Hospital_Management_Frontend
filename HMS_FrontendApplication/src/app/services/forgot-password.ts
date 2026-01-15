import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordService {
  private url = 'http://localhost:8080/auth/api/reset';

  constructor(private http: HttpClient) {}

  requestPasswordReset(email: string) {
    return this.http.post<{ message: string }>(`${this.url}/send-otp`, { email });
  }
}
