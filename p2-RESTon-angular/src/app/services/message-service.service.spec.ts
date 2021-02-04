import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MessageService } from './message-service.service';

describe('MessageServiceService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
