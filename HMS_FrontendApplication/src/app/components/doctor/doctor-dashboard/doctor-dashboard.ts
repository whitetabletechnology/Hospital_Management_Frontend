import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: false,
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.css',
})
export class DoctorDashboard implements OnInit{

  doctors: any[] = [];
  paginatedDoctors: any[] = [];
  loading = false;

  // Pagination variables
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 0;

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) return;

    setTimeout(() => {
      this.loadDoctors();
    });
  }

  loadDoctors(): void {
    this.loading = true;

    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
        this.totalPages = Math.ceil(this.doctors.length / this.itemsPerPage);

        this.setPage(1); // default load page 1
        this.cdr.detectChanges();

        this.loading = false;
      },
      error: (err) => {
        console.error("Error loading doctors: ", err);
        this.loading = false;
      }
    });
  }

  // Pagination logic
  setPage(page: number) {
    if (page < 1 || page > this.totalPages) return;

    this.currentPage = page;

    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    this.paginatedDoctors = this.doctors.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
