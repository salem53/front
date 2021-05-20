import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-founded-freelancers',
  templateUrl: './founded-freelancers.component.html',
  styleUrls: ['./founded-freelancers.component.css']
})
export class FoundedFreelancersComponent implements OnInit {
  freelancers;
  skills;
  constructor(public route: ActivatedRoute, public missionService : MissionService) {
    this.route.paramMap.subscribe(
      params => {
        this.skills = params.get('skills');
      }
    );
  }

  ngOnInit(): void {
    this.missionService.getFreelancersBySkills(this.skills)
      .subscribe(value =>{
        this.freelancers=value;
        for(let i=0;i<this.freelancers.length;i++){
          if(this.freelancers[i].freelancer.image!=null){
            this.freelancers[i].freelancer.image='data:image/jpeg;base64,'+this.freelancers[i].freelancer.image;

          }
          else{
            this.freelancers[i].freelancer.image=  'data:image/jpeg;base64,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';

          }
        }
        console.log(this.freelancers);
      } );
  }

}
