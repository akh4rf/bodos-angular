import { TestBed } from '@angular/core/testing';

import { RandomBagelService } from './random-bagel.service';

describe('RandomBagelService', () => {
  let service: RandomBagelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomBagelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
