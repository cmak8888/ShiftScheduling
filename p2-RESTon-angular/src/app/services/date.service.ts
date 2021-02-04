import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  addDays(currentDate: Date, days: any) {
    let newDate: Date = new Date(currentDate);
    // newDate.setDate(newDate.getDate() + days);
    return moment(newDate).add(days, 'days').toDate();
  }

  dateFormatter(date: Date, days?:number ) {
    if(days) {
      date = this.addDays(date, days)
    }
    let newDate = this.dateDiff(moment(date).toDate());
    let dateString: string = `
      ${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}
    `
    return dateString;
  }

  dateDiff(date: Date): any {
    let diff = date.getTimezoneOffset();
    let newTime = diff/60;
    return moment(date).add(newTime, 'hours').toDate();
  }

  changeTime(date: Date, newTime: string): Date {
    let newDateString: string = `
    ${date.getUTCMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()} ${newTime}
  `
  console.log(moment(newDateString).toDate());
  console.log(moment.utc(newDateString).toDate());
  return new Date(newDateString);
  }
}
