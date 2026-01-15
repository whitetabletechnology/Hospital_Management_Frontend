import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { VerifyOtpService } from '../../services/verify-otp-service';

@Component({
  selector: 'app-verify-otp',
  standalone: false,
  templateUrl: './verifyotp.html',
  styleUrls: ['./verifyotp.css']
})
export class VerifyOtp implements OnInit {
  verifyOtpForm!: FormGroup;
  email!: string;
 message: string = '';
  error: string = '';
  constructor(
    private fb: FormBuilder,
    private verifyOtpService: VerifyOtpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'];
    this.verifyOtpForm = this.fb.group({
      otp: ['', Validators.required],
    });
  }

onSubmit() {
    this.message = '';
    this.error = '';

    if (this.verifyOtpForm.invalid) return;

    const otp = this.verifyOtpForm.value.otp;

    this.verifyOtpService.verifyOtp(this.email, otp).subscribe({
      next: (res) => {
        this.message = res.message;
        setTimeout(() => this.router.navigate(['/reset-password'], { queryParams: { email: this.email } }), 1500);
      },
      error: (err) => this.error = err.error?.message || 'OTP verification failed'
    });
  }
}