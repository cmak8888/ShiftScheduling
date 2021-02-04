import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
@Component({
  selector: 'rev-manager-weekly-view',
  templateUrl: './manager-weekly-view.component.html',
  styleUrls: ['./manager-weekly-view.component.scss']
})
export class ManagerWeeklyViewComponent implements OnInit {

  error:string = '';
  currentSchedule: Schedule = new Schedule();
  pushing: boolean = false;

  constructor(
  private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
  }

  postSchedule(): void {
    this.scheduleService.postSchedule()
    .then(e => this.error = "success")
    .catch(e => this.error = "error");
  }

  pushSchedule(): void {
    this.pushing = true;
    this.scheduleService.pushSchedule(this.currentSchedule)
    .then(e => this.pushing = false)
    .catch(err => console.log(err));
  }

  getSchedule(schedule: Schedule) {
    this.currentSchedule = schedule;
  }

  closeError() {
    this.error = '';
  }

}
