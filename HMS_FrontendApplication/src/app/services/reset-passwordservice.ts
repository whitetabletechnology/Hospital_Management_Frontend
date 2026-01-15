import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ResetPasswordService {
  private url = 'http://localhost:8080/auth/api/reset';

  constructor(private http: HttpClient) {}

  resetPassword(data: { email: string; newPassword: string; confirmPassword: string }) {
 return this.http.put<{ message: string }>(`${this.url}/password`, data);
  }
}
