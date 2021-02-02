import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shift';
import * as moment from 'moment';

@Component({
  selector: 'rev-view-shift',
  templateUrl: './view-shift.component.html',
  styleUrls: ['./view-shift.component.scss']
})
export class ViewShiftComponent implements OnInit {

@Input() shift: Shift;

  constructor() { }

  ngOnInit(): void {
    console.log(this.shift);
    console.log("------------");
  }

  dateFormatter(date: Date) {
    return moment(date).format('hh:MM A');
  }

  dayFormatter(date: Date) {
    return moment(date).format('MMMM DD, YYYY')
  }

}
