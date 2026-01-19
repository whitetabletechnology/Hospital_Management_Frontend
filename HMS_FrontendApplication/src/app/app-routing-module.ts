import { RouterModule, Routes } from "@angular/router";
import { ForgotPassword } from "./components/forgot-password/forgot-password";
import { Login } from "./components/login/login";
import { Register } from "./components/register/register";
import { ResetPassword } from "./components/reset-password/reset-password";
import { VerifyOtp } from "./components/verifyotp/verifyotp";
import { AdminDashboard } from "./components/admin/admin-dashboard/admin-dashboard";
import { AuthGuard } from "./guards/auth-guard";
import { DoctorList } from "./components/admin/doctor-management/doctor-list/doctor-list";
import { DoctorAdd } from "./components/admin/doctor-management/doctor-add/doctor-add";
import { DoctorEdit } from "./components/admin/doctor-management/doctor-edit/doctor-edit";
import { DoctorDashboard } from "./components/doctor/doctor-dashboard/doctor-dashboard";
import { PatientDashboard } from "./components/patient/patient-dashboard/patient-dashboard";
import { NgModule } from "@angular/core";

const routes: Routes = [

  // default
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'verify-otp', component: VerifyOtp },
  { path: 'reset-password', component: ResetPassword },

   // Doctor Management - FULL SEPARATE PAGES
  { path: 'admin/doctor-management/doctor-list', component: DoctorList, canActivate: [AuthGuard] },
  { path: 'admin/doctor-management/doctor-add', component: DoctorAdd, canActivate: [AuthGuard] },
  { path: 'admin/doctor-management/doctor-edit/:id', component: DoctorEdit, canActivate: [AuthGuard] },

  // dashboards for other roles
  { path: 'admin-dashboard', component: AdminDashboard, canActivate: [AuthGuard] },
  { path: 'doctor-dashboard', component: DoctorDashboard, canActivate: [AuthGuard] },
  { path: 'patient-dashboard', component: PatientDashboard, canActivate: [AuthGuard] },

  // fallback
  { path: '**', redirectTo: 'login' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule] })
   
export class AppRoutingModule { }
