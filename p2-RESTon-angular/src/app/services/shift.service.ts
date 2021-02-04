import { Injectable } from '@angular/core';
import { Shift } from '../models/shift';
import { ScheduleApiService } from './rest/schedule-api.service';
import { ShiftApiService } from './rest/shift-api.service';
import { ScheduleService } from './schedule.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {

  apiSetUp: boolean = true;

  constructor(private shiftAPIService: ShiftApiService, private scheduleService: ScheduleService) { }

  postNewShift(shift: Shift): Promise<string> {

    return new Promise((resolve, reject) => {
      console.log('test');
      if(!this.apiSetUp) {
        shift.id = 0;
        this.scheduleService.addShiftToSchedule(shift);
        return resolve("Shift successfully added!");
      }
      console.log(shift)
      this.shiftAPIService.post(shift)
      .then(newShift => {
        newShift.schedule = shift.schedule;
        this.scheduleService.addShiftToSchedule(newShift);
        resolve("Shift successfully added!");
      })
      .catch(error => {
        console.log(error)
        reject("There was an issue adding the shift.")
      });
    })
  }

  putShift(shift: Shift): Promise<string> {
    return new Promise((resolve, reject) => {
      if(!this.apiSetUp) {
        shift.id = 0;
        this.scheduleService.addShiftToSchedule(shift);
        return resolve("Shift successfully updated!");
      }
      this.shiftAPIService.put(shift)
      .then(shift => {
        this.scheduleService.addShiftToSchedule(shift);
        resolve("Shift successfully updated!");
      })
      .catch(error => {
        console.log(error)
        reject("There was an issue updating the shift.")
      });
    })
  }

}

