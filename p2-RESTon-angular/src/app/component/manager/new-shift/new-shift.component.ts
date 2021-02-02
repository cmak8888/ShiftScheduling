import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/position';
import { Schedule } from 'src/app/models/schedule';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { PositionService } from 'src/app/services/position.service';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rev-new-shift',
  templateUrl: './new-shift.component.html',
  styleUrls: ['./new-shift.component.scss']
})
export class NewShiftComponent implements OnInit {

  @Input() schedule: Schedule;
  @Input() date: Date;
  @Output() postCheck = new EventEmitter<string>();
  // testSuccess: string = "success";
  allShifts: Shift[] = [];
  schedules: Schedule[]
  positions: Position[];
  users: User[];
  shift: Shift = new Shift();
  errorMessage: string = "";
  currentDayInt: number;
  currentScheduleInt: number;
  days: string[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ]
  currentDay: string;
  userId: number;
  positionId: number;
  startTime: string;
  endTime: string;
  currentShiftsInDay: Shift[];

  constructor(
    private userService: UserService,
    private route: Router,
    private dateService: DateService,
    private positionService: PositionService,
    private shiftService: ShiftService,
    private scheduleService: ScheduleService
    ) { }

    ngOnInit(): void {
      this.scheduleService.daysShift.subscribe(e => {
        this.allShifts = e;
      })
      this.userService.getAllEmployees().then(e => {
        this.users = e;
      })
      this.positionService.getPositions().then(e => {
        this.positions = e;
      })
      this.currentDayInt = this.date.getUTCDay();
      this.shift.schedule = this.schedule;
      this.currentDay = this.days[this.currentDayInt];
      this.startTime = moment(this.shift.shiftStartTime).format("HH:mm");
      this.endTime = moment(this.shift.shiftEndTime).format("HH:mm");
      // this.postCheck.emit('1');
  }

  postShift() {
    this.shift.user = this.users.find(e => e.id == this.userId)
    this.shift.position = this.positions.find(e => e.id == this.positionId)
    this.shift.shiftStartTime = this.dateService.changeTime(this.date, this.startTime)
    this.shift.shiftEndTime = this.dateService.changeTime(this.date, this.endTime)
    this.shift.id = 0;
    this.shiftService.postNewShift(this.shift)
    .then(res => {
      console.log(res);
      this.postCheck.emit("success")
      console.log(this.postCheck)
    })
    .catch(err => {
      this.errorMessage = err;
      this.postCheck.emit("error");
      console.log(this.postCheck)
    })
  }

  isAvailable(user: User): boolean {
    let available = false;

    let exists = this.allShifts.find(s => s.user.id == user.id)
    if (!user.availability[this.currentDay] || exists) {
      available = true;
    }
    return available;
  }
}
