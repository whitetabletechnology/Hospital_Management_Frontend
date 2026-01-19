import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = "http://localhost:8080/api/admin/doctors";

  constructor(private http: HttpClient) {}

  // GET ALL DOCTORS
  getAllDoctors(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // CREATE DOCTOR
  createDoctor(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // GET DOCTOR BY ID
  getDoctorById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // UPDATE DOCTOR
  updateDoctor(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // DELETE DOCTOR
  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
