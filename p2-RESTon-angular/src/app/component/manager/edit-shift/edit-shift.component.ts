import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/position';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { PositionService } from 'src/app/services/position.service';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'rev-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  @Input() allShifts: Shift[];
  @Input() currentSchedule: Schedule;
  @Input() shift:Shift;
  @Input() date: Date;
  users: User[];
  positions: Position[];
  errorMessage: string = "";
  currentDayInt: number;
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
  startTime: string;
  endTime: string;
  positionId: number;

  constructor(
    private shiftService: ShiftService,
    private userService: UserService,
    private route: Router,
    private dateService: DateService,
    private positionService: PositionService,
    ) { }

  ngOnInit(): void {

    this.userId = this.shift.user.id;
    this.positionId = this.shift.position.id;
    this.userService.getAllEmployees().then(e => {
      this.users = e;
    })
    this.positionService.getPositions().then(e => {
      this.positions = e;
    })
    this.currentDayInt = parseInt(this.route.url.split("=")[1][0]);
    this.currentDay = this.days[this.currentDayInt];
    this.date = this.shift.shiftStartTime;
    this.startTime = moment(this.shift.shiftStartTime).format("HH:mm");
    this.endTime = moment(this.shift.shiftEndTime).format("HH:mm");
  }

  editShift() {
    this.shift.user = this.users.find(e => e.id == this.userId)
    this.shift.position = this.positions.find(e => e.id == this.positionId)

    this.shift.shiftStartTime = this.dateService.changeTime(new Date(this.shift.shiftStartTime), this.startTime)
    this.shift.shiftEndTime = this.dateService.changeTime(new Date(this.shift.shiftEndTime), this.endTime)

    this.shift.schedule = this.currentSchedule;

    this.shiftService.putShift(this.shift)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      this.errorMessage = err;
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
