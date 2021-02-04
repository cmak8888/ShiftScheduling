import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mailbox } from '../models/mailbox';
import { MailboxApiService } from './rest/mailbox-api.service';

@Injectable({ 
  providedIn: 'root'
})
export class EmailValidationService {

  validatedEmail: Mailbox;
  
  constructor(private mailboxService: MailboxApiService) { }

  public showValidation(userEmail: string): Observable<Mailbox> {
    return this.mailboxService.getValidation(userEmail);
    
      // .subscribe((validation: Mailbox) => {
      //   return validation;
      // });
  }
}
