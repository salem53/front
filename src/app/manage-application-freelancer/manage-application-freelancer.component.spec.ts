import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplicationFreelancerComponent } from './manage-application-freelancer.component';

describe('ManageApplicationFreelancerComponent', () => {
  let component: ManageApplicationFreelancerComponent;
  let fixture: ComponentFixture<ManageApplicationFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageApplicationFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApplicationFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
