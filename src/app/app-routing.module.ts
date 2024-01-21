import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },

  {path: 'auth', component: AuthLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)},
  ]},

  {path: 'main', component: MainLayoutComponent, children: [
    {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
