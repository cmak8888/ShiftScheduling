import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedComponentsModule
  ]
})
export class UserDashboardModule { }
