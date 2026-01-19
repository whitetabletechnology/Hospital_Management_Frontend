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
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { ResetPassword } from './components/reset-password/reset-password';
import { VerifyOtp } from './components/verifyotp/verifyotp';
import { DoctorList } from './components/admin/doctor-management/doctor-list/doctor-list';
import { DoctorAdd } from './components/admin/doctor-management/doctor-add/doctor-add';
import { DoctorEdit } from './components/admin/doctor-management/doctor-edit/doctor-edit';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    App,
    Login,
    Register,
    PatientDashboard,
    DoctorDashboard,
    AdminDashboard,
    StaffDashboard,
    ForgotPassword,
    VerifyOtp ,
    ResetPassword,
    DoctorList,
    DoctorAdd,
    DoctorEdit,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [App]
})
export class AppModule { }
