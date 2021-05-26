import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsQuestionsComponent } from './skills-questions.component';

describe('SkillsQuestionsComponent', () => {
  let component: SkillsQuestionsComponent;
  let fixture: ComponentFixture<SkillsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
