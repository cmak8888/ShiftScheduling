import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
import * as moment from 'moment';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'rev-weekly-schedule-calendar',
  templateUrl: './weekly-schedule-calendar.component.html',
  styleUrls: ['./weekly-schedule-calendar.component.scss']
})
export class WeeklyScheduleCalendarComponent implements OnInit {

  schedules: Schedule[] = [];
  currentSchedule: Schedule;
  currentDate: string;
  currentScheduleIndex: number = 0;

  constructor(
    private scheduleService: ScheduleService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.scheduleService.schedules.subscribe(schedules => {
      this.schedules = schedules;
      this.currentSchedule = schedules[this.currentScheduleIndex];
    })
  }

  addDays(currentDate: Date, days: any) {
    let newDate: Date = new Date(currentDate);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  dateFormatter(date: Date, days?: number) {
    return this.dateService.dateFormatter(date, days);
  }

  changeSchedule(index: number): any {
    if(this.schedules[this.currentScheduleIndex + index]) {
      this.currentScheduleIndex += index;
      this.currentSchedule = this.schedules[this.currentScheduleIndex];
    }
  }
}
