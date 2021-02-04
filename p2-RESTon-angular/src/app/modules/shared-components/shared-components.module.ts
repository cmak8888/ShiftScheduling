import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleCalanderComponent } from 'src/app/shared/schedule-calander/schedule-calander.component';
import { RolesComponent } from 'src/app/shared/roles/roles.component';
import { ShiftsComponent } from 'src/app/shared/shifts/shifts.component';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { BulletinMessageComponent } from 'src/app/shared/bulletin-message/bulletin-message.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { ViewShiftComponent } from 'src/app/shared/view-shift/view-shift.component';
import { WeeklyViewComponent } from 'src/app/pages/shared/weekly-view/weekly-view.component';
import { WeeklyScheduleCalendarComponent } from 'src/app/shared/weekly-schedule-calendar/weekly-schedule-calendar.component';
import { LoaderOneComponent } from 'src/app/shared/loaders/loader-one/loader-one.component';
import { WeeklyEnrollsComponent } from 'src/app/shared/weekly-enrolls/weekly-enrolls.component';
import { LoaderTwoComponent } from 'src/app/shared/loaders/loader-two/loader-two.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileComponent } from 'src/app/pages/user/profile/profile.component';
import { UserComponent } from 'src/app/pages/user/user/user.component';
import { EditShiftComponent } from 'src/app/component/manager/edit-shift/edit-shift.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AvailabilityComponent } from 'src/app/pages/user/availability/availability.component';
import {MatSelectModule} from '@angular/material/select';
import { MessageFormComponent } from 'src/app/shared/message-form/message-form.component';
import { BulletinFormComponent } from 'src/app/shared/bulletin-form/bulletin-form.component';
import { ChatroomComponent } from 'src/app/shared/chatroom/chatroom.component';
import { MessageRoomComponent } from 'src/app/pages/shared/message-room/message-room.component';
import { MessagingComponent } from 'src/app/shared/messaging/messaging.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginFormComponent } from 'src/app/login/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/pages/manager/register-form/register-form.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginFormComponent,
    UserComponent,
    ScheduleCalanderComponent,
    RolesComponent,
    ShiftsComponent,
    MessageComponent,
    BulletinMessageComponent,
    NavBarComponent,
    ModalComponent,
    ViewShiftComponent,
    WeeklyViewComponent,
    WeeklyScheduleCalendarComponent,
    LoaderOneComponent,
    WeeklyEnrollsComponent,
    LoaderTwoComponent,
    EditShiftComponent,
    BulletinFormComponent,
    AvailabilityComponent,
    MessageFormComponent,
    ChatroomComponent,
    MessagingComponent,
    MessageRoomComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule
  ],
  exports: [
    ProfileComponent,
    UserComponent,
    ScheduleCalanderComponent,
    NavBarComponent,
    RolesComponent,
    ShiftsComponent,
    MessageComponent,
    BulletinMessageComponent,
    ScheduleCalanderComponent,
    ModalComponent,
    ViewShiftComponent,
    WeeklyViewComponent,
    WeeklyScheduleCalendarComponent,
    LoaderOneComponent,
    WeeklyEnrollsComponent,
    LoaderTwoComponent,
    EditShiftComponent,
    BulletinFormComponent,
    AvailabilityComponent,
    MessageFormComponent,
    ChatroomComponent,
    MessagingComponent,
    MessageRoomComponent,
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class SharedComponentsModule { }
