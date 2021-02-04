import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Mailbox } from 'src/app/models/mailbox';


@Injectable({
  providedIn: 'root'
})
export class MailboxApiService {

  mailboxUrl = 'https://apilayer.net/api/check?access_key=c6c6cdb380928f525967a7b315072bf4&email='

  constructor(private http: HttpClient) { }

  getValidation(userEmail: string) {
    return this.http.get<Mailbox>(this.mailboxUrl + userEmail);
  }
}
