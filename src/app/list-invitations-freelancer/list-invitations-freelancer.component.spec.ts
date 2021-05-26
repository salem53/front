import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvitationsFreelancerComponent } from './list-invitations-freelancer.component';

describe('ListInvitationsFreelancerComponent', () => {
  let component: ListInvitationsFreelancerComponent;
  let fixture: ComponentFixture<ListInvitationsFreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInvitationsFreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvitationsFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
