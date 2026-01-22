import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth/api';

  constructor(private http: HttpClient) {}

  register(data: any) {
  return this.http.post<any>(`${this.baseUrl}/register`, data);
}
  // LOGIN
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, data);
  }

  //  REFRESH TOKEN
  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/refresh`, {
      refreshToken: this.getRefreshToken()
    });
  }

  //  SAVE TOKENS
  saveAuthData(response: any): void {
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('refreshToken', response.refreshToken);
    localStorage.setItem('role', response.role);
    localStorage.setItem('email', response.userEmailId);
    localStorage.setItem('tokenType', response.tokenType);
  }

  //  ACCESS TOKEN
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  
  //GET ROLE
getRole(): string | null {
  return localStorage.getItem('role');
}
  //  REFRESH TOKEN
  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  //  LOGIN CHECK
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  //  LOGOUT
  logout(): void {
    localStorage.clear();
  }
}
