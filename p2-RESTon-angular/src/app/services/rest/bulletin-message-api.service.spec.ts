import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BulletinMessageApiService } from './bulletin-message-api.service';

describe('BulletinMessageApiService', () => {
  let service: BulletinMessageApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(BulletinMessageApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
