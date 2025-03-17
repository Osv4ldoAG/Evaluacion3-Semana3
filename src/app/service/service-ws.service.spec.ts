import { TestBed } from '@angular/core/testing';

import { ServiceWSService } from './service-ws.service';

describe('ServiceWSService', () => {
  let service: ServiceWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
