import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('Login success', res);
        alert('Login successful');
      },
      error: (err: any) => {
        console.error(err);
        alert('Invalid credentials');
      }
    });
  }

}
