import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeedbacksFreelancerComponent } from './list-feedbacks-freelancer.component';

describe('ListFeedbacksFreelancerComponent', () => {
  let component: ListFeedbacksFreelancerComponent;
  let fixture: ComponentFixture<ListFeedbacksFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFeedbacksFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFeedbacksFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
