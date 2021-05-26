import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotHiredMissionDetailsComponent } from './not-hired-mission-details.component';

describe('NotHiredMissionDetailsComponent', () => {
  let component: NotHiredMissionDetailsComponent;
  let fixture: ComponentFixture<NotHiredMissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotHiredMissionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotHiredMissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
