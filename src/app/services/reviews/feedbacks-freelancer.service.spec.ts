import { TestBed } from '@angular/core/testing';

import { FeedbacksFreelancerService } from './feedbacks-freelancer.service';

describe('FeedbacksFreelancerService', () => {
  let service: FeedbacksFreelancerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbacksFreelancerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
