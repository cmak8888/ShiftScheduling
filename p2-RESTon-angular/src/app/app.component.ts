import { ScheduleService } from './services/schedule.service';
import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'rev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'p2-RESTon-angular';

  baseUrl: string = environment.api;
}
