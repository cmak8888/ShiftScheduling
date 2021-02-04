import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  constructor(private api: ApiService) { }

  //all
  public get(): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.api.get<Message[]>(`all-messages`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }

  //id
  public getById(message: Message): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.api.get<Message>(`message?id=${message.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }

  //user: sender id
  public getBySenderId(sender: User): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.api.get<Message>(`message?sender_id=${sender.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }

  //user: receiver id
  public getByReceiverId(receiver: User): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.api.get<Message>(`message?receiver_id=${receiver.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }

  //users: sender id and receiver id
  public getDirectMessages(sender: User, receiver: User): Promise<Message[]>  {
    return new Promise((resolve, reject) => {
      this.api.get<Message[]>(`conversation?sender_id=${sender.id}&reciever_id=${receiver.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }

  public post(message: Message): Promise<Message> {
    console.log(message);
    return new Promise((resolve, reject) => {
      this.api.post<Message>(`insert-message`, message).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        console.log(error.error);
        reject("Error: " + error);
      })
    })
  }
  public put(message: Message): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.api.put<Message>(`update-message`, message).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(message: Message): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.api.delete<Message>(`delete-message?id=${message.id}`).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
