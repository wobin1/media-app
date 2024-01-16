import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

const routes: Routes = [
  {'path': 'sign-up', component: SignUpComponent},
  {'path': 'login', component: LoginComponent},
  {'path': 'forgot-password', component: ForgotPasswordComponent},
  {'path': 'reset-password', component: ResetPasswordComponent},
  {'path': 'verify-otp', component: VerifyOtpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
