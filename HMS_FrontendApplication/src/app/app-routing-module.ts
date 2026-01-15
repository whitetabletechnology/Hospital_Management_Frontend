import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
import { DoctorDashboard } from './components/doctor/doctor-dashboard/doctor-dashboard';
import { PatientDashboard } from './components/patient/patient-dashboard/patient-dashboard';
import { AuthGuard } from './guards/auth-guard';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { VerifyOtp } from './components/verifyotp/verifyotp';
import { ResetPassword } from './components/reset-password/reset-password';

const routes: Routes = [
 { path: 'admin-dashboard', component: AdminDashboard, canActivate: [AuthGuard] },
  { path: 'doctor-dashboard', component: DoctorDashboard, canActivate: [AuthGuard] },
  { path: 'patient-dashboard', component: PatientDashboard, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {path:'forgot-password', component:ForgotPassword},
  {path:'verify-otp', component:VerifyOtp},
  {path:'reset-password', component:ResetPassword},
  { path: '**', redirectTo: 'login' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
