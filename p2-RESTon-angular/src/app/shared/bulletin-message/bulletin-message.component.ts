import { DateService } from 'src/app/services/date.service';
import { Component, Input, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import * as moment from 'moment';

@Component({
  selector: 'rev-bulletin-message',
  templateUrl: './bulletin-message.component.html',
  styleUrls: ['./bulletin-message.component.scss']
})
export class BulletinMessageComponent implements OnInit {

  @Input() message: BulletinMessage;

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit(): void {
  }

  formatDate(date: Date) {

    return moment(date).format('MM/DD/YYYY hh:mm A');
  }

}
