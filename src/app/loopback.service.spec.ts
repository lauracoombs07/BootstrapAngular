import { TestBed } from '@angular/core/testing';

import { LoopbackService } from './loopback.service';

describe('LoopbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoopbackService = TestBed.get(LoopbackService);
    expect(service).toBeTruthy();
  });
});
