/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FatchDataService } from './fatchData.service';

describe('Service: FatchData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FatchDataService]
    });
  });

  it('should ...', inject([FatchDataService], (service: FatchDataService) => {
    expect(service).toBeTruthy();
  }));
});
