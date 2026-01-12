import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
import { DoctorDashboard } from './components/doctor/doctor-dashboard/doctor-dashboard';
import { PatientDashboard } from './components/patient/patient-dashboard/patient-dashboard';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
 { path: 'admin-dashboard', component: AdminDashboard, canActivate: [AuthGuard] },
  { path: 'doctor-dashboard', component: DoctorDashboard, canActivate: [AuthGuard] },
  { path: 'patient-dashboard', component: PatientDashboard, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
