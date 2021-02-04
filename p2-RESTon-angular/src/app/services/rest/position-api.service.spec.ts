import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PositionApiService } from './position-api.service';

describe('PositionApiService', () => {
  let service: PositionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ RouterTestingModule, HttpClientTestingModule ]});
    service = TestBed.inject(PositionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
