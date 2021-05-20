import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredMissionsFreelancerComponent } from './hired-missions-freelancer.component';

describe('HiredMissionsFreelancerComponent', () => {
  let component: HiredMissionsFreelancerComponent;
  let fixture: ComponentFixture<HiredMissionsFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredMissionsFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredMissionsFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
