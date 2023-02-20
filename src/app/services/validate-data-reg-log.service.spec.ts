import { TestBed } from '@angular/core/testing';

import { ValidateDataRegLogService } from './validate-data-reg-log.service';

describe('ValidateDataRegLogService', () => {
  let service: ValidateDataRegLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateDataRegLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
