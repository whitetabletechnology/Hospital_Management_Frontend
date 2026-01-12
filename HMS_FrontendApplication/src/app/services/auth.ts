import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth/api';

  constructor(private http: HttpClient) {}

  // 🔐 LOGIN API
  login(data: any) {
    return this.http.post<any>(`${this.baseUrl}/login`, data);
  }

  // 📝 REGISTER API
  register(data: any) {
    return this.http.post<any>(`${this.baseUrl}/register`, data);
  }

  // 💾 SAVE AUTH DATA AFTER LOGIN
  saveAuthData(response: any): void {
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('role', response.role);
    localStorage.setItem('email', response.userEmailId);
    localStorage.setItem('tokenType', response.tokenType);
  }

  // 🔑 GET TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 👤 GET ROLE
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  // ✅ CHECK LOGIN STATUS (IMPORTANT FOR GUARD)
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // 🚪 LOGOUT
  logout(): void {
    localStorage.clear();
  }
}
