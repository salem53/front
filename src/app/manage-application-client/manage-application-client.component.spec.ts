import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageApplicationClientComponent } from './manage-application-client.component';

describe('ManageApplicationClientComponent', () => {
  let component: ManageApplicationClientComponent;
  let fixture: ComponentFixture<ManageApplicationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageApplicationClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageApplicationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
