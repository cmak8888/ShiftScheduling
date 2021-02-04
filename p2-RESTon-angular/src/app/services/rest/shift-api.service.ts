import { Injectable } from '@angular/core';
import { ShiftInterface } from './../../interfaces/shift-interface';
import { Shift } from 'src/app/models/shift';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShiftApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<ShiftInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface[]>(`all-shifts`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface>(`shift?id=${shift.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getByScheduleId(shift: Shift): Promise<ShiftInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface[]>(`shift?schedule_id=${shift.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getByUserId(shift: Shift): Promise<ShiftInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface[]>(`shift?user_id=${shift.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getByPositionId(shift: Shift): Promise<ShiftInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<ShiftInterface[]>(`shift?position_id=${shift.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<ShiftInterface>(`insert-shift`, shift).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        // reject("Error: " + error);
        reject(error);
      })
    })
  }
  public put(shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<ShiftInterface>(`update-shift`, shift).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        console.log(error);
        reject("Error: " + error);
      })
    })
  }



  // will have to figure out passing the request body
  public delete(shift: Shift): Promise<ShiftInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<ShiftInterface>(`delete-shift?id=${shift.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
