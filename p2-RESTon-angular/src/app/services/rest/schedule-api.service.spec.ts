import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ScheduleApiService } from './schedule-api.service';

describe('ScheduleApiService', () => {
  let service: ScheduleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(ScheduleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
