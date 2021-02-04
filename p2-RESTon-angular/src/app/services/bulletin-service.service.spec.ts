import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BulletinServiceService } from './bulletin-service.service';

describe('BulletinServiceService', () => {
  let service: BulletinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(BulletinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
