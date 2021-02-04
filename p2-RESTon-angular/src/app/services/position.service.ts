import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Position } from '../models/position';
import { PositionApiService } from './rest/position-api.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  apiWorking: boolean = true;

  // positions: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>([
  //   {
  //     id: 1,
  //     name: 'Cook'
  //   },
  //   {
  //     id: 2,
  //     name: 'Waiter'
  //   },
  //   {
  //     id: 3,
  //     name: 'Manager'
  //   }
  // ]);

  positions: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>([])

  constructor(private positionApiService: PositionApiService) { }

  getPositions(): Promise<Position[]> {
    return new Promise((resolve, reject) => {

      this.positionApiService.get()
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject('There was an error getting positions');
      })
    })
  }

}
