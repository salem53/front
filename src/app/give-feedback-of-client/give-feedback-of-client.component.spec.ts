import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFeedbackOfClientComponent } from './give-feedback-of-client.component';

describe('GiveFeedbackOfClientComponent', () => {
  let component: GiveFeedbackOfClientComponent;
  let fixture: ComponentFixture<GiveFeedbackOfClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveFeedbackOfClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveFeedbackOfClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
