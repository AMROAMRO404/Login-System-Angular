import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { LoginComponent } from './login/login.component';
import { CanActivate } from '@angular/router'
import { AuthGuardService as AuthGurad } from './auth-guard.service';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-page', component: AdminProfileComponent, canActivate: [AuthGurad] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
