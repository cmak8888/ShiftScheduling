import { ScheduleViewComponent } from './../../pages/manager/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerDashboardComponent } from 'src/app/pages/manager/manager-dashboard/manager-dashboard.component';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { ManagerBulletinComponent } from 'src/app/pages/manager/manager-bulletin/manager-bulletin.component';
import { ManagerShoutFormComponent } from 'src/app/pages/manager/manager-shout-form/manager-shout-form.component';
import { ManagerWeeklyViewComponent } from 'src/app/pages/manager/manager-weekly-view/manager-weekly-view.component';
import { RegisterFormComponent } from 'src/app/pages/manager/register-form/register-form.component';
import { MessageRoomComponent } from 'src/app/pages/shared/message-room/message-room.component';

const routes: Routes = [
  {
    path: '',
    component: ManagerDashboardComponent,
    children :[
      {path: '', component: ManagerBulletinComponent},
      {path: 'weekly-view', component: ManagerWeeklyViewComponent},
      {path: 'view-day', component: ScheduleViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'bulletin-form', component: ManagerShoutFormComponent},
      {path: 'register', component: RegisterFormComponent},
      {path: 'chat', component: MessageRoomComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerDashboardRoutingModule { }
