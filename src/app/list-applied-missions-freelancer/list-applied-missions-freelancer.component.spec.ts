import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppliedMissionsFreelancerComponent } from './list-applied-missions-freelancer.component';

describe('ListAppliedMissionsFreelancerComponent', () => {
  let component: ListAppliedMissionsFreelancerComponent;
  let fixture: ComponentFixture<ListAppliedMissionsFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppliedMissionsFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppliedMissionsFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
