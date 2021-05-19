import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompletedFreelancerMissionsComponent } from './list-completed-freelancer-missions.component';

describe('ListCompletedFreelancerMissionsComponent', () => {
  let component: ListCompletedFreelancerMissionsComponent;
  let fixture: ComponentFixture<ListCompletedFreelancerMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompletedFreelancerMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompletedFreelancerMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
