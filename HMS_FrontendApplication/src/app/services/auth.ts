import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

    private baseUrl = `http://localhost:8080/auth/api`;

  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  register(data: any) {
  return this.http.post(`http://localhost:8080/auth/api/register`, data);
}

  
}
