import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../../../../services/doctor.service';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.css'],
  standalone:false
})
export class DoctorList implements OnInit {

  doctors: any[] = [];
  loading=false;

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

  if (!token) return;
   setTimeout(() => {
    this.loadDoctors();
  });
  }

  loadDoctors():void {
    this.loading=true;
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        console.log('Doctors API Response:',data);
        this.doctors = data;
        console.log('Doctors loaded on refresh ',this.doctors.length);
        this.loading=false;
        
      },
      error: (err) => {
        console.error("Error loading doctors: ", err);

        this.loading=false;
      }
    });
  }
  

  goToAddDoctor():void {
    this.router.navigate(['/admin/doctor-management/doctor-add']);
  }

  editDoctor(id: number):void {
    this.router.navigate(['/admin/doctor-management/doctor-edit', id]);
  }

  deleteDoctor(id: number) {
    if (confirm("Are you sure you want to delete this doctor?")) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        this.loadDoctors();
      });
    }
  }
}