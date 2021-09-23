import { TestBed } from '@angular/core/testing';

import { MagicPredictionsService } from './magic-predictions.service';

describe('MagicPredictionsService', () => {
  let service: MagicPredictionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicPredictionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
