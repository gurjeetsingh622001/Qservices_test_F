import { TestBed } from '@angular/core/testing';

import { OlxTestServicesService } from './olx-test-services.service';

describe('OlxTestServicesService', () => {
  let service: OlxTestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlxTestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
