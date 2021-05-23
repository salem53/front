import { IdSkilled, Skilled } from './../models/infosFreelencer/skill';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../services/InfosFreelancer/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  freelancer:any={};
  skilled:Skilled={};
  idSkilled:IdSkilled={};
  skill:any={};
  constructor( private router : Router, private route: ActivatedRoute,private skillService :SkillService) { }

  ngOnInit(): void {
  }

  newSkill(form)
  {
   
    this.skill=
    {
      'name':form.value.name,
      'id':0
    }
    this.freelancer.id=parseInt(this.route.snapshot.params.idFreelancer);
    this.skilled.freelancer=this.freelancer;
    this.skilled.idSkilled=this.idSkilled;
    this.skillService.getSkillByName(form.value.name).subscribe(
      response => {
       // console.log(response[0]);
        if (response[0]==null)//this skill isn't already registred
        {
          this.skillService.createNewSkill(this.skill).subscribe( responses => { 
         
            this.skill=
            {
              'name':form.value.name,
              'id':responses["id"] 
            }
        
           console.log(responses["id"]);
          this.skilled.skill=this.skill ;
          this.skillService.createSkilled(this.skilled).subscribe( responsee => {}); 
          });
        }
        else
         {
          this.skill=
          {
            'name':form.value.name,
            'id':response[0]["id"] 
          }
          this.skilled.skill=this.skill ;
          this.skillService.createSkilled(this.skilled).subscribe( responsee => {}); 
         }


      });
     this.router.navigate(['newsfeed-freelancer']) 
  }



  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  getFile()
  {
    //this.skillService.getFileBack(idSkill,this.retrieveResonse, this.base64Data,this.retrievedImage,this.imageName);
  this.skillService.test();
  }



}
