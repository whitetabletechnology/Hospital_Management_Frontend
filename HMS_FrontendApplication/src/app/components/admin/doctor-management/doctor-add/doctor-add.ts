import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from '../../../../services/doctor.service';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.html',
  styleUrls: ['./doctor-add.css'],
  standalone:false
})
export class DoctorAdd implements OnInit {

  doctorForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private doctorService: DoctorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      }),
      specialization: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      availability: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.doctorForm.invalid) {
      this.doctorForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    this.doctorService.createDoctor(this.doctorForm.value).subscribe({
      next: (res) => {
        alert("Doctor Added Successfully!");
        this.loading = false;
        this.router.navigate(['/admin/doctor-management/doctor-list']);
      },
      error: (err) => {
        console.error("Error creating doctor: ", err);
        alert("Failed to add doctor!");
        this.loading = false;
      }
    });
  }
}
