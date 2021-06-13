import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../services/InfosFreelancer/skill.service';

@Component({
  selector: 'app-skills-questions',
  templateUrl: './skills-questions.component.html',
  styleUrls: ['./skills-questions.component.css']
})
export class SkillsQuestionsComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute,private skillService :SkillService) {
      this.skillService.getQuestions().subscribe(res=>{this.listQuestions=res;});
      

   }

   skill:any={};
   tab:string[]=[];
   name:string;
  ngOnInit(): void {
  }
  //question:any;
listQuestions :any;
test:string="true";
submitQuestions(form)
{
  console.log(this.skill);
}

evaluateQuestions(form)
{ let question:any;
  for (question in this.listQuestions)
  if(form.value.question !=question)
  {
    this.test="false";
  }
  //this.skillService.
}
}
