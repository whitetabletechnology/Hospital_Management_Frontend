import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone:false
})
export class Login implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {

        this.authService.saveAuthData(response);

        if (response.role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } 
        else if (response.role === 'DOCTOR') {
          this.router.navigate(['/doctor-dashboard']);
        } 
        else if (response.role === 'PATIENT') {
          this.router.navigate(['/patient-dashboard']);
        } 
        else if (response.role === 'STAFF') {
          this.router.navigate(['/staff-dashboard']);
        } 
        else {
          alert('Invalid role');
          this.authService.logout();
        }
      },
      error: () => {
        alert('Invalid email or password');
      }
    });
  }
}
