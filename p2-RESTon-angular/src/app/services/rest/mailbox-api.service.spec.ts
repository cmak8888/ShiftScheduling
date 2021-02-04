import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MailboxApiService } from './mailbox-api.service';

describe('MailboxApiService', () => {
  let service: MailboxApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(MailboxApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
