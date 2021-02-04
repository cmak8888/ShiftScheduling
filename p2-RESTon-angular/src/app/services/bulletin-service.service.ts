import { BulletinMessageApiService } from './rest/bulletin-message-api.service';
import { BehaviorSubject, interval } from 'rxjs';
import { Injectable } from '@angular/core';
import { BulletinMessage } from '../models/bulletin-message';
import { startWith, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BulletinServiceService {

  apiWorking: boolean = true;

  private bulletinMessages: BehaviorSubject<BulletinMessage[]> = new BehaviorSubject<BulletinMessage[]>([]);

  isPolling: boolean = false;

  constructor(private bulletinMessageApiService: BulletinMessageApiService) { }

  get BulletinMessages(): BehaviorSubject<BulletinMessage[]> {
    this.polebulletinMessages();
    return this.bulletinMessages;
  }

  polebulletinMessages(): void {
    if(this.isPolling) {
      return;
    }
    interval(500).pipe(startWith(0), switchMap(() => this.bulletinMessageApiService.get()))
    .subscribe(res => {
      this.bulletinMessages.next(res);
    }, error => {
      console.log(error);
    })
    this.isPolling = true;
  }

  populateBulletinMessages(): Promise<string> {
    return new Promise((resolve, reject) => {

      if(!this.apiWorking){
        return resolve('Messages retrieved successfully.');
      }

      this.bulletinMessageApiService.get()
      .then(res => {
        this.bulletinMessages.next(res);
        resolve('Messages retrieved successfully.');
      })
      .catch(error => {
        console.log(error);
        reject('There was an error getting the messages.');
      })
    })
  }



  postBulletinMessage(message: BulletinMessage): Promise<string> {
    return new Promise((resolve, reject) => {
      if(message.content.length == 0) {
        return reject('Message is Empty');
      }
      if(!this.apiWorking){
        this.addMessageToBulletin(message);
        return resolve('Messages retrieved successfully.');
      }
      console.log(this.bulletinMessages.value);
      this.bulletinMessageApiService.post(message)
      .then(res => {
        this.addMessageToBulletin(message);
        console.log(this.bulletinMessages.value);
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  private addMessageToBulletin(message: BulletinMessage): void {
    let messages = this.bulletinMessages.value;
    console.log("Adding Message");
    console.log(message);
    messages.push(message);
    this.bulletinMessages.next(messages);
  }
}
