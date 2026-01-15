import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from '../../services/reset-passwordservice';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  standalone: false,
  styleUrls: ['./reset-password.css']
})
export class ResetPassword implements OnInit {
  resetPasswordForm!: FormGroup;
  email!: string;
  message: string = '';
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'];
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.message = '';
    this.error = '';

    const { newPassword, confirmPassword } = this.resetPasswordForm.value;

    if (newPassword !== confirmPassword) {
      this.error = 'Passwords do not match!';
      return;
    }

    this.resetPasswordService.resetPassword({
      email: this.email,
      newPassword,
      confirmPassword
    }).subscribe({
      next: (res) => {
        this.message = res.message;
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => this.error = err.error?.message || 'Error resetting password'
    });
  }
}
