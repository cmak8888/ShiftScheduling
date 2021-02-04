import { ScheduleService } from './../../services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'rev-schedule-calander',
  templateUrl: './schedule-calander.component.html',
  styleUrls: ['./schedule-calander.component.scss']
})
export class ScheduleCalanderComponent implements OnInit, AfterContentChecked {

  @Output() setAllShifts: EventEmitter<Shift[]> = new EventEmitter<Shift[]>();
  @Input() schedule: Schedule;
  parsedShifts;
  allShifts: any[] = [];
  day: number;
  date: Date;
  num: number = 80;
  number: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  shiftCount: number;
  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private dateService: DateService
    ) { }

  ngOnInit(): void {
    this.initialize();
    this.shiftCount = this.schedule.shifts.length;
  }

  ngAfterContentChecked(): void {
    this.initialize();
  }

  dateFormatter(date: Date) {
    return this.dateService.dateFormatter(date, this.day);
  }

  initialize(): void {
    if(this.schedule.shifts.length != this.shiftCount) {
      this.day = parseInt(this.activatedRoute.snapshot.queryParams.day);
      this.parsedShifts = this.scheduleService.parseShiftsByDay(this.schedule, this.day);
      this.allShifts = []
      for(let e of Object.values(this.parsedShifts)) {
        this.allShifts = this.allShifts.concat(e);
      }
      console.log(this.allShifts);
      this.setAllShifts.emit(this.allShifts);
      console.log(this.parsedShifts);
      this.date = this.dateService.addDays(this.schedule.startDate, this.day);
      this.shiftCount = this.schedule.shifts.length;
    }
  }
}
