import { Injectable } from '@angular/core';
import { PositionInterface } from './../../interfaces/position-interface';
import { Position } from 'src/app/models/position';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PositionApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<PositionInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<PositionInterface[]>(`all-positions`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<PositionInterface>(`position?id=${position.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<PositionInterface>(`insert-position`, position).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<PositionInterface>(`update-position`, position).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }


  public delete(position: Position): Promise<PositionInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<PositionInterface>(`delete-position?id=${position.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
