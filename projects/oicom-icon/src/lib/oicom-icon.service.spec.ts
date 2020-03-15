import { TestBed } from '@angular/core/testing';

import { OicomIconService } from './oicom-icon.service';

describe('OicomIconService', () => {
  let service: OicomIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OicomIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
