import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Schedule } from 'src/app/models/schedule';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ScheduleApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<Schedule[]> {
    return new Promise((resolve, reject) => {
      this.api.get<Schedule[]>(`all-schedules`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        console.log(error);

        reject("Error: " + error);
      })
    })
  }
  public getAllActive(): Promise<Schedule[]> {
    return new Promise((resolve, reject) => {
      this.api.get<Schedule[]>(`all-active-schedules`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(schedule: Schedule): Promise<Schedule> {
    return new Promise((resolve, reject) => {
      this.api.get<Schedule>(`schedule/${schedule.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(schedule: Schedule): Promise<Schedule> {
    return new Promise((resolve, reject) => {
      this.api.post<Schedule>(`insert-schedule`, schedule).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(schedule: Schedule): Promise<Schedule> {
    return new Promise((resolve, reject) => {
      this.api.put<Schedule>(`update-schedule`, schedule).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        //
        console.log(error);
        reject("Error: " + error);
      })
    })
  }




  //same issue
  public delete(schedule: Schedule): Promise<Schedule> {
    return new Promise((resolve, reject) => {
      this.api.delete<Schedule>(`delete-schedule?id=${schedule.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
