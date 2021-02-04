import { UserService } from './../../../services/user.service';
import { ScheduleService } from './../../../services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEmployees()
    .then(res => {
      console.log(res);

    })
    .catch(error => {
      console.log(error);

    })
  }

}
