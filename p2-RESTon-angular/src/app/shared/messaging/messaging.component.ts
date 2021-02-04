import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit, OnChanges, OnDestroy {

  @Input() user: User;
  myUser: User;
  messages: Array<Message> = [];
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  watchMessages: BehaviorSubject<Message[]>;

  constructor(private messageService: MessageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.myUser = this.authService.loggedInUser.value;
    this.messageService.reciever = this.user;
    this.watchMessages = this.messageService.Messages;
    this.watchMessages.subscribe(messages => {
      if (this.messages.length != messages.length || this.messages.length == 0) {
        this.messages = messages
      }
    });
    this.scrollToBottom();
  }

  ngOnChanges(): void {
    this.messageService.reciever = this.user;
    console.log(this.user);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.watchMessages.unsubscribe();
  }

  loadMessages(): void {
    this.messageService.messages.subscribe(messages => {
      this.messages = [];
      messages.forEach(message => {
        if(message.reciever.id == this.user.id && message.sender.id == this.myUser.id) {
          this.messages.push(message);
        }
      })
    });
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
}
