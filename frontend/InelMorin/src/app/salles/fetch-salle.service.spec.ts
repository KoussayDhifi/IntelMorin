import { TestBed } from '@angular/core/testing';

import { FetchSalleService } from './fetch-salle.service';

describe('FetchSalleService', () => {
  let service: FetchSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
