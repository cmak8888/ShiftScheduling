import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerDashboardRoutingModule } from './manager-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { NewShiftComponent } from 'src/app/component/manager/new-shift/new-shift.component';
import { ScheduleViewComponent } from 'src/app/pages/manager/schedule-view/schedule-view.component';
import { ManagerBulletinComponent } from 'src/app/pages/manager/manager-bulletin/manager-bulletin.component';
import { ManagerMessageFormComponent } from 'src/app/pages/manager/manager-message-form/manager-message-form.component';
import { ManagerShoutFormComponent } from 'src/app/pages/manager/manager-shout-form/manager-shout-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerWeeklyViewComponent } from 'src/app/pages/manager/manager-weekly-view/manager-weekly-view.component';
import { RegisterFormComponent } from 'src/app/pages/manager/register-form/register-form.component';



@NgModule({
  declarations: [
    ManagerDashboardComponent,
    ScheduleViewComponent,
    NewShiftComponent,
    ManagerBulletinComponent,
    ManagerMessageFormComponent,
    ManagerShoutFormComponent,
    ManagerWeeklyViewComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ManagerDashboardRoutingModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerDashboardModule { }
