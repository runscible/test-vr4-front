import { TestBed } from '@angular/core/testing';

import { MainServicService } from './main-servic.service';

describe('MainServicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainServicService = TestBed.get(MainServicService);
    expect(service).toBeTruthy();
  });
});
