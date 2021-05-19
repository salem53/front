import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompletedClientMissionsComponent } from './list-completed-client-missions.component';

describe('ListCompletedClientMissionsComponent', () => {
  let component: ListCompletedClientMissionsComponent;
  let fixture: ComponentFixture<ListCompletedClientMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompletedClientMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompletedClientMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
