import { TestBed } from '@angular/core/testing';

import { QuoteSimpsonService } from './quote-simpson.service';

describe('QuoteSimpsonService', () => {
  let service: QuoteSimpsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteSimpsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
