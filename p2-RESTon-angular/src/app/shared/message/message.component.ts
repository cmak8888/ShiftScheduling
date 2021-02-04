import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Message } from 'src/app/models/message';

@Component({
  selector: 'rev-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  @Input() lastMessage: Message;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getName(): string {
    if (this.message.sender === undefined) {
      return;
    }
    return this.message.sender.firstName + ' ' + this.message.sender.lastName;
  }

  formatDate(date: number) {
    return moment(date).format('DD/MM/YYYY hh:mm A');
  }

  isMine(): boolean {
    return this.authService.loggedInUser.value.id == this.message.sender.id;
  }
}
