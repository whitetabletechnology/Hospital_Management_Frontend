import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  standalone: false
})
export class Register implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const userData = {
      ...this.registerForm.value,
      role: 'PATIENT'   //  default role set here
    };

    this.authService.register(userData).subscribe({
      next: (response:any) => {
        alert('Registered Successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log(err);
        alert('Registration failed');
      }
    });
  }
}
