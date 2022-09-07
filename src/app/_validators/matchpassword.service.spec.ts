import { TestBed } from '@angular/core/testing';

import { MatchpasswordService } from './matchpassword.service';

describe('MatchpasswordService', () => {
  let service: MatchpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
