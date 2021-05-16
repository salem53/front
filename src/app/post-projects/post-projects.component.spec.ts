import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjectsComponent } from './post-projects.component';

describe('PostProjectsComponent', () => {
  let component: PostProjectsComponent;
  let fixture: ComponentFixture<PostProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
