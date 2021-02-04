import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShiftApiService } from './shift-api.service';

describe('ShiftApiService', () => {
  let service: ShiftApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(ShiftApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
