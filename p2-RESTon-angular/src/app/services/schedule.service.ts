import { EmployeeShifts } from './../models/employee-shifts';
import { UserService } from './user.service';
import { ScheduleInterface } from './../interfaces/schedule-interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { Shift } from '../models/shift';
import { ScheduleApiService } from './rest/schedule-api.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  apiSetup: boolean = true;
  daysShift: BehaviorSubject<Shift[]> = new BehaviorSubject<Shift[]>([]);

  private schedules: BehaviorSubject<Schedule[]> = new BehaviorSubject<Schedule[]>([]);

  constructor(private userService: UserService, private sheduleAPIService: ScheduleApiService) {}

  getSchedules(): BehaviorSubject<Schedule[]> {
    this.sheduleAPIService.get()
    .then(e => {
      this.schedules.next(e)
    })
    .catch(err => console.log(err));
    return this.schedules;
  }

  addShiftToSchedule(shift: Shift) {
    let schedules = this.schedules.value;
    schedules.find(e => e.id == shift.schedule.id).shifts.push(shift);
    this.schedules.next(schedules);
  }

  parseShifts(schedule: Schedule) {
    let shiftMap = {};
    for(let shift of schedule.shifts) {
      if(!shiftMap[shift.position.name]) {
        shiftMap[shift.position.name] = []
      }
      shiftMap[shift.position.name].push(shift);
    }

    return shiftMap;
  }

  parseShiftsByDay(schedule: Schedule, day: number) {
    let shiftMap = {};
    let shifts = schedule.shifts.filter(s => new Date(s.shiftStartTime).getUTCDay() == day);
    this.daysShift.next(shifts);
    for(let shift of shifts) {
      if(!shiftMap[shift.position.name]) {
        shiftMap[shift.position.name] = [];
      }
      shiftMap[shift.position.name].push(shift);
    }

    return shiftMap;
  }

  parseShiftsByEmployee(schedule: Schedule): Promise<EmployeeShifts[]> {
    return new Promise((resolve, reject) => {
      let employeeMap: EmployeeShifts[] = [];
      this.userService.getAllEmployees()
      .then(users => {
        for(let user of users) {
          let employeeShifts: EmployeeShifts = new EmployeeShifts();
          employeeShifts.employeeName = user.firstName + ' ' + user.lastName;
          employeeShifts.availability = user.availability

          let es = schedule.shifts.filter(shift => shift.user.id == user.id);
          for(let i=0;i<=6;i++) {
            if(es.filter(shift => new Date(shift.shiftStartTime).getUTCDay() == i).length){
              let shift = es.find(shift => new Date(shift.shiftStartTime).getUTCDay() == i);
              employeeShifts.shifts.push(shift);
            } else {
              employeeShifts.shifts.push(undefined);
            }


          }
          employeeMap.push(employeeShifts);
        }
        resolve(employeeMap);
      })
      .catch(error => {
        console.log(error);
      })


    });
  }

  postSchedule() {
    return new Promise((resolve, reject) => {

      let schedule: Schedule;

      if(this.schedules.value.length) {
        let lastSchedule = this.schedules.value[this.schedules.value.length - 1];

        if(lastSchedule.active == false) {
          return reject("You can only create one schedule at a time.");
        }
        schedule = this.postFromLast(lastSchedule);

      } else {
        schedule = this.postFromNew();
      }

      if(!this.apiSetup) {
        this.schedules.next(this.schedules.getValue().concat(schedule));
        console.log(this.schedules.value);
        return resolve("Successfully created a new Schedule!");
      }
      this.sheduleAPIService.post(schedule)
      .then(e => {
        this.schedules.next(this.schedules.getValue().concat(e));
        resolve("Successfully created a new Schedule!");
      })
      .catch(error => {
        console.log(error);
        return reject("There was an error creating a new Schedule")
      })

    })
  }

  private postFromLast(lastSchedule: Schedule): Schedule {

    let schedule = new Schedule();
    if(!this.apiSetup) {
        let lastId =  lastSchedule.id + 1;
        schedule.id = lastId;
    }
    let lastStartDate = lastSchedule.startDate;
    schedule.startDate = moment(lastStartDate).add(7, "days").toDate();
    schedule.active = false;
    return schedule;
  }

  private postFromNew(): Schedule {
    let sunday = moment.utc().startOf('week').toDate();
    let schedule = new Schedule();
    schedule.startDate = sunday;
    schedule.active = false;
    return schedule;
  }

  pushSchedule(schedule: Schedule) {
    return new Promise((resolve, reject) => {
      schedule.active = true;

      if(!this.apiSetup) {
        if(!schedule.active) {
          this.schedules.next(this.schedules.getValue().concat(schedule));
          console.log(this.schedules.value);
          resolve("Successfully pushed the Schedule!");
        } else {
          reject("This schedule has already been pushed.")
        }
      }

      this.sheduleAPIService.put(schedule)
      .then(e => {
        this.schedules.next(this.schedules.getValue().concat(schedule));
        resolve("Successfully pushed the Schedule!");
      })
      .catch(error => {
        console.log(error);
        reject("This schedule has already been pushed.")
      })

    })
  }
}
