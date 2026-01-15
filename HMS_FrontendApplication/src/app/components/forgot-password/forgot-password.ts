import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ForgotPasswordService } from '../../services/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.html',
  standalone: false,
  styleUrls: ['./forgot-password.css']
})
export class ForgotPassword implements OnInit {
  forgotPasswordForm!: FormGroup;
 message: string = ''; 
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private forgotPasswordService: ForgotPasswordService,
    private router: Router
  ) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

 onSubmit() {
    this.message = '';
    this.error = '';

    if (this.forgotPasswordForm.invalid) return;

    const email = this.forgotPasswordForm.value.email;

    this.forgotPasswordService.requestPasswordReset(email).subscribe({
      next: (res) => {
        this.message = res.message; // show message in template
        setTimeout(() => this.router.navigate(['/verify-otp'], { queryParams: { email } }), 1500);
      },
      error: (err) => { 
        this.error = err.error.message || 'Error sending OTP'; 
         console.log(err.error.message);
      }
    });
  }
}
