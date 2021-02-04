import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { WeeklyScheduleCalendarComponent } from './weekly-schedule-calendar.component';

describe('WeeklyScheduleCalendarComponent', () => {
  let component: WeeklyScheduleCalendarComponent;
  let fixture: ComponentFixture<WeeklyScheduleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyScheduleCalendarComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyScheduleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
