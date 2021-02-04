import { ScheduleService } from './../../../services/schedule.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'rev-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit, OnChanges {

  currentSchedule: Schedule;
  viewModal:string = "";
  date: Date;
  day: number;
  postSuccess: string = "";


  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.currentSchedule = schedules.find(e => {
        const csId = this.activatedRoute.snapshot.queryParams.scheduleId;
        return e.id == csId;
      });
      if(this.currentSchedule) {
        this.currentSchedule.startDate = new Date(this.currentSchedule.startDate);
        this.day = parseInt(this.activatedRoute.snapshot.queryParams.day);
        this.date = this.dateService.addDays(this.currentSchedule.startDate, this.day);
      }
    })
  }

  ngOnChanges(): void {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.currentSchedule = schedules.find(e => {
        const csId = this.activatedRoute.snapshot.queryParams.scheduleId;
        return e.id == csId;
      });
      if(this.currentSchedule) {
        this.currentSchedule.startDate = new Date(this.currentSchedule.startDate);
        this.day = parseInt(this.activatedRoute.snapshot.queryParams.day);
        this.date = this.dateService.addDays(this.currentSchedule.startDate, this.day);
      }
    })
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }

  receiveNotification($event) {
    switch ($event) {
      case ("success"):
        this.postSuccess = "success"
        break;
      case ("error"):
        this.postSuccess = "error"
    }
    console.log(this.postSuccess);
  }

  closePostSuccess() {
    this.postSuccess = "";
  }

}
