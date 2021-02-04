import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserApiService } from 'src/app/services/rest/user-api.service';

@Component({
  selector: 'rev-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();
  error: string = '';
  hide = true;


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmit(event){
    event.preventDefault();

    console.log("submitted");
    this.authService.login(this.user)
    .then(response => {
      console.log(response);
    }).catch(
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    )
  }





}
