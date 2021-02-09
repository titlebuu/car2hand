import { TestBed } from '@angular/core/testing';

import { ObserCarService } from './obser-car.service';

describe('ObserCarService', () => {
  let service: ObserCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObserCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
