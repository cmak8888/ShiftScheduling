import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';
@Component({
  selector: 'rev-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit, OnDestroy {

  schedules: Schedule[] = [];
  viewModal: string = "";
  scheduleBehavior: BehaviorSubject<Schedule[]>;

  constructor(
    private scheduleService: ScheduleService
    ) { }

  ngOnInit(): void {
    this.scheduleBehavior = this.scheduleService.getSchedules();
    this.scheduleBehavior.subscribe(schedules => {
      this.schedules = schedules;
    })
  }

  ngOnDestroy(): void {
    this.scheduleBehavior.unsubscribe();
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }
}
