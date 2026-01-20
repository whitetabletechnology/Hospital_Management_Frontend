import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.html',
  styleUrls: ['./doctor-list.css'],
  standalone:false
})
export class DoctorList implements OnInit {

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

  goToAddDoctor(): void {
    this.router.navigate(['/admin/doctor-management/doctor-add']);
  }

  editDoctor(id: number): void {
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
