import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundedMissionsComponent } from './founded-missions.component';

describe('FoundedMissionsComponent', () => {
  let component: FoundedMissionsComponent;
  let fixture: ComponentFixture<FoundedMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundedMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundedMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
