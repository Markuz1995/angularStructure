import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CircularProgressComponent } from './pages/circular-progress/circular-progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { NofoudComponent } from './pages/nofoud/nofoud.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'devices', component: DevicesComponent},
      { path: 'circular-progress', component: CircularProgressComponent},    
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NofoudComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
