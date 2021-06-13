import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFeedbackOfFreelancerComponent } from './give-feedback-of-freelancer.component';

describe('GiveFeedbackOfFreelancerComponent', () => {
  let component: GiveFeedbackOfFreelancerComponent;
  let fixture: ComponentFixture<GiveFeedbackOfFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveFeedbackOfFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveFeedbackOfFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
