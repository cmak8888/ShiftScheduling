import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { EmployeeDashboardComponent } from 'src/app/pages/employee/employee-dashboard/employee-dashboard.component';
import { EmployeeScheduleViewComponent } from 'src/app/pages/employee/employee-schedule-view/employee-schedule-view.component';
import { ViewMyShiftComponent } from 'src/app/component/employee/view-my-shift/view-my-shift.component';
import { EmployeeBulletinComponent } from 'src/app/pages/employee/employee-bulletin/employee-bulletin.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeScheduleViewComponent,
    ViewMyShiftComponent,
    EmployeeBulletinComponent,
  ],
  imports: [
    SharedComponentsModule,
    CommonModule,
    EmployeeDashboardRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EmployeeDashboardModule { }
