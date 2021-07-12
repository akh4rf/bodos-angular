import { TestBed } from '@angular/core/testing';

import { InstaAPIRequestService } from './insta-api-request.service';

describe('InstaAPIRequestService', () => {
  let service: InstaAPIRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstaAPIRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
