import { TestBed } from '@angular/core/testing';

import { WidespreadsService } from './widespreads.service';

describe('WidespreadsService', () => {
  let service: WidespreadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidespreadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
