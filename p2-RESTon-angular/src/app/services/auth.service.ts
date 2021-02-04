import { Availability } from './../models/availability';
import { User } from './../models/user';
import { UserApiService } from './rest/user-api.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiSetup: boolean = true;
  isSuccess: boolean = true;

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(
    private userApi: UserApiService,
    private router: Router
  ) { }

  /**
   * @returns boolean
   *  checks if user logged in is a manager
   *  used for route guards
   */
  public loggedInIsManager(): boolean {
    let user: User;
    let localStorageUser = localStorage.getItem("user")
    if(localStorageUser)
      user = JSON.parse(atob(localStorage.getItem("user")));
    if (user)
      this.loggedInUser.next(user);

    return this.loggedInUser.value.isManager;
  }
  public isLoggedIn(): boolean {
    let user: User;
    let localStorageUser = localStorage.getItem("user")
    if(localStorageUser)
      user = JSON.parse(atob(localStorage.getItem("user")));
    if (user)
      this.loggedInUser.next(user);

    return !!this.loggedInUser.value;
  }

  /**
   * @param User
   *  sets logged in user
   *  Used in login/register methods
   */
  public setLoggedInUser(user: User, overrideNavigate?: boolean) {
    localStorage.setItem("user", btoa(JSON.stringify(user)));
    this.loggedInUser.next(user);
    if (overrideNavigate){
      let navigateTo = 'employee';
      if (user.isManager) {
        navigateTo = 'manager';
      }
      this.router.navigate([navigateTo]);
    }
  }

  /**
   * @param User
   *  must have username and password set on user argument
   *
   * @returns string
   *  Message - successfuly logged in or
   *            reject with error message
   */
  public login(user: User): Promise<string> {
    return new Promise((resolve, reject) => {


      // While we don't have a login endpoint...
      if (!this.apiSetup && this.isSuccess) {
        user.id = 1;
        user.isManager = false;
        user.phone = 5551234567;
        user.firstName = 'Test User';
        user.lastName = 'Test User';
        this.setLoggedInUser(user);
        return resolve('Successfully logged in!');
      }
      if(!this.apiSetup && !this.isSuccess) {
        return reject('Email/password is incorrect');
      }

      if (!user.email || !user.password) {
        return reject("Email and Password are required.")
      }
      this.userApi.login(user)
      .then(u => {
        if(u.password == user.password) {
          resolve("Successfully logged in!");
          console.log(u);

          this.setLoggedInUser(u, true);
        } else {
          return reject("Email/Password is incorrect")
        }
      })
      .catch(error => {
        console.log(error);
        reject("Email/Password is incorrect");
      })
    })
  }

  /**
   * Logs out the logged in user
   * returns you to the landing page
   */
  public logout(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.userApi.logout(this.loggedInUser.value)
      .then(res => {
        localStorage.clear();
        this.loggedInUser.next(null);
        this.router.navigate(['']);
        resolve(res);
      }).catch(error => {
        reject("There was an error logging out.")
      });

    })
  }

  register(user: User): Promise<string> {
    return new Promise((resolve, reject) => {

      user.id = 0;
      user.isManager = false;
      delete user.confirmPassword;

      console.log(user);


      if(!this.apiSetup && this.isSuccess) {
        user.id = 9001;
        user.isManager = false;
        user.firstName= 'Calvin';
        user.lastName= 'Mak';
        user.email= 'calvin@mail.com';
        user.password= null;
        user.phone= 15;
        let availability = new Availability();
        availability.id = 50;

        this.setLoggedInUser(user, false);
        return resolve("Successfully created your Account!");
      }
      if(!this.apiSetup && !this.isSuccess) {
        return reject("There was an error creating your user");
      }


      this.userApi.post(user)
      .then(u => {
        resolve("Successfully created your Account!");
        // this.setLoggedInUser(u);
      })
      .catch(error => {
        console.log(error);
        reject("There was an error creating your account.")
      })
    })
  }

}
