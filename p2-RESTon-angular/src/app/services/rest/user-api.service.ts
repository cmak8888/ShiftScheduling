import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user-interface';
import { User } from 'src/app/models/user';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<UserInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<UserInterface[]>(`all-users`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        console.log(error);

        reject("Error: " + error);
      })
    })
  }
  public getById(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<UserInterface>(`user?id=${user.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(user: User): Promise<string> {
    return new Promise((resolve, reject) => {
      this.api.post<string>(`signup`, user).pipe(take(1)).subscribe(res => {
        console.log(res);

        resolve("User has successfully been created.");
      }, error => {
        console.log(error);

        reject("Error: " + error);
      })
    })
  }
  public put(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<UserInterface>(`update-user`, user).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }







  // Gotta figure this out ASAP
  public delete(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<UserInterface>(`delete-user?id=${user.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }








  // Auth calls
  public logout(user: User): Promise<string> {
    return new Promise((resolve, reject) => {
      this.api.post<string>(`logout`, user).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
    public login(user: User): Promise<UserInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<UserInterface>(`login`, user).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
