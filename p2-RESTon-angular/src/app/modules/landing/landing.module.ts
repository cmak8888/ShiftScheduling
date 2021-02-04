import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LoginFormComponent } from 'src/app/login/login-form/login-form.component';
import { LoginPageComponent } from 'src/app/pages/landing/login-page/login-page.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { LandingPageComponent } from 'src/app/pages/landing/landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    LandingPageComponent,
    LoginPageComponent,
    // LoginFormComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    LandingRoutingModule,
    SharedComponentsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class LandingModule { }
