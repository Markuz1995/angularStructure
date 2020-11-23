import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { DevicesComponent } from './devices/devices.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    DevicesComponent,
    CircularProgressComponent,
  ],
  exports:[
    DashboardComponent,
    PagesComponent,
    DevicesComponent,
    CircularProgressComponent,
  ],  
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
