import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login} from './components/login/login';
import { ReactiveFormsModule } from '@angular/forms';
import { Register } from './components/register/register';
import { FormsModule } from '@angular/forms';
import { PatientDashboard } from './components/patient/patient-dashboard/patient-dashboard';
import { DoctorDashboard } from './components/doctor/doctor-dashboard/doctor-dashboard';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
import { StaffDashboard } from './components/staff/staff-dashboard/staff-dashboard';



@NgModule({
  declarations: [
    App,
    Login,
    Register,
    PatientDashboard,
    DoctorDashboard,
    AdminDashboard,
    StaffDashboard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
