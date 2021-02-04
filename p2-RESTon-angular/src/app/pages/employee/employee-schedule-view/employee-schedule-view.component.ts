import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-employee-schedule-view',
  templateUrl: './employee-schedule-view.component.html',
  styleUrls: ['./employee-schedule-view.component.scss']
})


export class EmployeeScheduleViewComponent implements OnInit {
  currentSchedule: Schedule;

  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.currentSchedule = schedules.find(e => {
        const csId = this.activatedRoute.snapshot.queryParams.scheduleId;
        return e.id == csId;
      });
    })
  }

  formatDate(date: number): Date {
    let newDate = new Date(this.currentSchedule.startDate);
    return newDate;
  }

}
