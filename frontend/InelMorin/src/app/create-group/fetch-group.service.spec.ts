import { TestBed } from '@angular/core/testing';

import { FetchGroupService } from './fetch-group.service';

describe('FetchGroupService', () => {
  let service: FetchGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
