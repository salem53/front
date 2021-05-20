import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredMissionsClientComponent } from './hired-missions-client.component';

describe('HiredMissionsClientComponent', () => {
  let component: HiredMissionsClientComponent;
  let fixture: ComponentFixture<HiredMissionsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredMissionsClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredMissionsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
