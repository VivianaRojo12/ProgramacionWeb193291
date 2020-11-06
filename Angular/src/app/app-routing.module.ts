import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AddComponent} from './add/add.component';
import { from } from 'rxjs';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path : '', redirectTo: 'login', pathMatch : 'full'},
  { path : 'landing-page', component: LandingPageComponent},
  { path : 'login', component: LoginComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'dashboard', component: DashboardComponent },
  { path : 'add', component : AddComponent },
  { path : 'edit', component : EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }