import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { BulletinMessage } from '../models/bulletin-message';
import { BehaviorSubject, interval, Observable, of } from 'rxjs';
import { catchError, map, startWith, switchMap, tap } from 'rxjs/operators';
import { MessageApiService } from './rest/message-api.service';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiWorking: boolean = true;

  bulletinUrl: string = "";
  messagesBankUrl: string = "";

  isPolling: boolean = false;
  intervalValue: Observable<any> = interval(500);

  dummyBulletin: Array<Message> = [];

  messages: BehaviorSubject<Message []> = new BehaviorSubject<Message[]>(this.dummyBulletin);
  private displayMessages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  reciever: User;
  lastReciever: User;

  constructor(private http: HttpClient, private messageApiService: MessageApiService, private authService: AuthService) { }

  get Messages(): BehaviorSubject<Message[]> {
    this.pollMessages();
    return this.displayMessages;
  }

  pollMessages(): void {
    // if(this.isPolling) {
    // }
    let sender: User = this.authService.loggedInUser.value;
    this.intervalValue.pipe(startWith(0))
    .subscribe(res => {
      this.messageApiService.getDirectMessages(sender, this.reciever).then(messages => {
        this.displayMessages.next(messages);
      });
    }, error => {
      console.log(error);
    })
    this.isPolling = true;
  }



  getMessages(): Promise<String> {
    return new Promise((resolve, reject) => {
      if(!this.apiWorking){
        return resolve('Messages retrieved successfully.');
      }

      this.messageApiService.get()
      .then(res => {
        res.forEach(message => {
          this.addMessage(message);
        })
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  getMessagesBySender(user: User): Promise<String> {
    return new Promise((resolve, reject) => {
      if(!this.apiWorking){
        return resolve('Messages retrieved successfully.');
      }

      this.messageApiService.getBySenderId(user)
      .then(res => {
        res.forEach(message => {
          this.addMessage(message);
        })
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  postMessage(message: Message): Promise<String> {
    // console.log(message);
    message.time = new Date();
    return new Promise((resolve, reject) => {
      if(message.content.length == 0) {
        return reject("Message is Empty");
      }
      if(!this.apiWorking){
        this.addMessage(message);
        return resolve('Messages retrieved successfully.');
      }

      this.messageApiService.post(message)
      .then(res => {
        // this.addMessage(message);
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  private addMessage(message: Message): void {
    let messages = this.messages.value;
    messages.push(message);
    this.messages.next(messages);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
