import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvailabilityApiService } from './availability-api.service';

describe('AvailabilityApiService', () => {
  let service: AvailabilityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(AvailabilityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
