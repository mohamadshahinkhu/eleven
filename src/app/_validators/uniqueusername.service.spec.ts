import { TestBed } from '@angular/core/testing';

import { UniqueusernameService } from './uniqueusername.service';

describe('UniqueusernameService', () => {
  let service: UniqueusernameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueusernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
