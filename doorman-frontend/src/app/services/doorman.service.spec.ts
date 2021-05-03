import { TestBed } from '@angular/core/testing';

import { DoormanService } from './doorman.service';

describe('DoormanService', () => {
  let service: DoormanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoormanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
