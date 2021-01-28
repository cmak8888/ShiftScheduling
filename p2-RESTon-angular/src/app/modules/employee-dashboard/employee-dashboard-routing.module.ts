import { EmployeeScheduleViewComponent } from './../../pages/employee/employee-schedule-view/employee-schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDashboardComponent } from 'src/app/pages/employee/employee-dashboard/employee-dashboard.component';
import { WeeklyViewComponent } from 'src/app/pages/shared/weekly-view/weekly-view.component';
import { EmployeeBulletinComponent } from 'src/app/pages/employee/employee-bulletin/employee-bulletin.component';
import { EmployeeMessageFormComponent } from 'src/app/pages/employee/employee-message-form/employee-message-form.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children :[
      {path: '', component: EmployeeBulletinComponent},
      {path: 'weekly-view', component: WeeklyViewComponent},
      {path: 'view-day', component: EmployeeScheduleViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'message-form', component: EmployeeMessageFormComponent},
      // Lets change the below to something else
      {path: '**', redirectTo: "/week-calender"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDashboardRoutingModule { }
