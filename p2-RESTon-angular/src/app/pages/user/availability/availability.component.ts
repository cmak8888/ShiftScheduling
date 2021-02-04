import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Availability } from 'src/app/models/availability';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from 'src/app/services/rest/user-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'rev-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit{
  // user: User = JSON.parse(atob(localStorage.getItem("user")));
  avail:Availability;
  days:string[] = [];
  myForm: FormGroup;
  user: User;
  message:boolean = false;
  touch:boolean = false;



  constructor(private authService: AuthService, private fb: FormBuilder, private userApiService: UserApiService, private _snackBar: MatSnackBar) {}

  ngOnInit(){
    this.authService.loggedInUser.subscribe(value => {
      console.log("this is the subscribed value within the availability component: ", value);
    });
    this.user = this.authService.loggedInUser.value;
    this.avail = this.authService.loggedInUser.value.availability;
    console.log("we are checking out the user inside oninit " , this.user)
    
    // delete this.avail.id;
    // delete this.avail.user;
    Object.keys(this.avail).forEach(key => {
      if(key == "id"){
        return
      }
      this.days.push(key);
    })
    
  }


    select(){
      this.touch = true;
    }


    onSubmit(): Promise<User> {
      return new Promise((resolve, reject) =>{
        this.userApiService.put(this.user)
        .then(res => { 
          resolve(res);
          this.authService.setLoggedInUser(res, false);
          this._snackBar.open("Availability update successful", "Dismiss", {
            duration: 3000,
          })
          this.message = true;
        })
        .catch(error => {
          console.log(error);
          reject('There was an error updating the current user');
        })
      })
    }


  
}
