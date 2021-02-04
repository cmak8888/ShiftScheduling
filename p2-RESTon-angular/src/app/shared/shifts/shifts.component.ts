import { Route } from '@angular/compiler/src/core';
import { AfterContentChecked, Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftInterface } from 'src/app/interfaces/shift-interface';
import { Schedule } from 'src/app/models/schedule';
import { Shift } from 'src/app/models/shift';
import { DateService } from 'src/app/services/date.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})

export class ShiftsComponent implements OnInit, AfterContentChecked {

  num: number[] = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5
  ]

  @Input() allShifts: Shift[];
  @Input() shift: Shift;
  viewModal: boolean = false;
  currentUser: string;
  @Input() currentSchedule: Schedule;
  empName: string = 'Dylan';
  startTime: any;
  endTime: any;
  startTimeMins: any;
  endTimeMins: any;
  totalStartMins
  totalEndMins
  testTime: number;
  color: string;
  increment: number;
  width: number;
  shiftObject;
  currentShiftStart: Date;

  constructor(
    private route: Router,
    private scheduleService: ScheduleService
    ) { }

  ngOnInit(): void {
    this.initialize();
    this.currentUser = this.route.url.split('/')[1];

  }

  ngAfterContentChecked(): void {
    this.initialize();
    this.currentUser = this.route.url.split('/')[1];

  }

  calculateWidth(startTime: number): number {
    return (startTime/60)*100;
  }

  calculateIncrement(startTime: number): number {
    return (startTime/60)*100;
  }

  initialize(): void {
    this.currentShiftStart = new Date(this.shift.shiftStartTime);
    this.startTime = new Date(this.shift.shiftStartTime).getHours();
    this.endTime =  new Date(this.shift.shiftEndTime).getHours();
    this.startTimeMins = new Date(this.shift.shiftStartTime).getMinutes();
    this.endTimeMins = new Date(this.shift.shiftEndTime).getMinutes();
    this.totalStartMins = (this.startTime * 60) + this.startTimeMins;
    this.totalEndMins = (this.endTime * 60) + this.endTimeMins;
    this.testTime = (this.totalEndMins) - (this.totalStartMins);
    this.increment = this.calculateIncrement(new Date(this.shift.shiftStartTime).getMinutes());
    this.width = this.calculateWidth(this.testTime);

    this.shiftObject = {
      'background-color': this.color,
      width: this.width + "px",
      left: this.increment + "px"
    }

  }

  viewModals(bool: boolean): void {
    this.viewModal = bool;
  }
}
