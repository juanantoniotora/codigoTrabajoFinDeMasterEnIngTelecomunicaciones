import { TestBed } from '@angular/core/testing';

import { SimulacionbbddService } from './simulacionbbdd.service';

describe('SimulacionbbddService', () => {
  let service: SimulacionbbddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulacionbbddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
