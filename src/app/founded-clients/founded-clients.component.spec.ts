import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundedClientsComponent } from './founded-clients.component';

describe('FoundedClientsComponent', () => {
  let component: FoundedClientsComponent;
  let fixture: ComponentFixture<FoundedClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundedClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundedClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
