import { ScheduleViewComponent } from './../../pages/manager/schedule-view/schedule-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';
import { RolesComponent } from 'src/app/shared/roles/roles.component';
import { ShiftsComponent } from 'src/app/shared/shifts/shifts.component';
import { BulletinComponent } from 'src/app/shared/bulletin/bulletin.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { BulletinMessageComponent } from 'src/app/shared/bulletin-message/bulletin-message.component';
import { MessageFormComponent } from 'src/app/shared/message-form/message-form.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';


@NgModule({
  declarations: [
    ScheduleCalanderComponent,
    RolesComponent,
    ShiftsComponent,
    BulletinComponent,
    MessageComponent,
    BulletinMessageComponent,
    MessageFormComponent,
    ScheduleViewComponent,
    ScheduleCalanderComponent,
    NavBarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ScheduleCalanderComponent,
    NavBarComponent,
    RolesComponent,
    ShiftsComponent,
    BulletinComponent,
    MessageComponent,
    BulletinMessageComponent,
    MessageFormComponent,
    ScheduleViewComponent,
    ScheduleCalanderComponent,
    ModalComponent
  ]
})
export class SharedComponentsModule { }
