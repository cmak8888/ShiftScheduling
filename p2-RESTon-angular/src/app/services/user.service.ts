import { BehaviorSubject } from 'rxjs';
import { UserApiService } from './rest/user-api.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiWorking: boolean = true;

  // users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      id: 1,
      firstName: 'George',
      lastName: 'Yoo',
      email: 'g@g.com',
      password: null,
      isManager: false,
      phone: 12,
      availability: {
        id: 1,
        user: null,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
      }
    },
    {
      id: 2,
      firstName: 'Dylan',
      lastName: 'Mahaffey',
      email: 'dylan@mail.com',
      password: null,
      isManager: false,
      phone: 13,
      availability: {
        id: 1,
        user: null,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: false,
        saturday: false,
        sunday: false
      }
    },
    {
      id: 3,
      firstName: 'Will',
      lastName: 'He',
      email: 'will@mail.com',
      password: null,
      isManager: false,
      phone: 14,
      availability: {
        id: 1,
        user: null,
        monday: true,
        tuesday: false,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
      }
    },
    {
      id: 4,
      firstName: 'Calvin',
      lastName: 'Mak',
      email: 'calvin@mail.com',
      password: null,
      isManager: false,
      phone: 15,
      availability: {
        id: 1,
        user: null,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
      }
    }
  ]);

  constructor(private userApiService: UserApiService, private authSerivce: AuthService) { }

  updateUser(user: User): Promise<User> {
    return new Promise((resolve, reject) =>{

      this.userApiService.put(user)
      .then(res => {
        resolve(res);
        this.authSerivce.setLoggedInUser(res, false);
      })
      .catch(error => {
        console.log(error);
        reject('There was an error updating the current user');
      })
    })
  }

  getAllEmployees(): Promise<User[]> {
    return new Promise((resolve, reject) => {

      this.userApiService.get()
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.log(error);
        reject('There was an error getting all users');
      })
    })
  }
}
