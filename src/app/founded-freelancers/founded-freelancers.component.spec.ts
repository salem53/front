import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundedFreelancersComponent } from './founded-freelancers.component';

describe('FoundedFreelancersComponent', () => {
  let component: FoundedFreelancersComponent;
  let fixture: ComponentFixture<FoundedFreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundedFreelancersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundedFreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
