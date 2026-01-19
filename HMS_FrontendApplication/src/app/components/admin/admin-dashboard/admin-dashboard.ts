import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
  standalone: false
})
export class AdminDashboard {

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  navigate(target: string) {
    if (target === 'patient') {
      this.router.navigate(['/admin/patient-management']);
    }
    if (target === 'staff') {
      this.router.navigate(['/admin/staff-management']);
    }
  }

  goToDoctors() {
  this.router.navigate(['/admin/doctor-management/doctor-list']);
}

}
