import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { SignInUpNavComponent } from './components/sign-in-up-nav/sign-in-up-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    SignInUpNavComponent,
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    AuthLayoutComponent,
    MainLayoutComponent,
    SignInUpNavComponent,
    // AppHeaderComponent
  ]
})
export class SharedModule { }
