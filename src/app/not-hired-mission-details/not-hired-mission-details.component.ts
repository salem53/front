import { FeedbacksFreelancerService } from './../services/reviews/feedbacks-freelancer.service';
import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-hired-mission-details',
  templateUrl: './not-hired-mission-details.component.html',
  styleUrls: ['./not-hired-mission-details.component.css']
})
export class NotHiredMissionDetailsComponent implements OnInit {
  invitedFreelancers;
  freelancersAcceptedInvitations;
  appliedFreelancers;
  mission;
  constructor(public missionService: MissionService, public router: Router,private serviceReview:FeedbacksFreelancerService) {
    this.invitedFreelancers =JSON.parse(sessionStorage.invitedFreelancers);
    //console.log(this.invitedFreelancers);
    this.freelancersAcceptedInvitations=JSON.parse(sessionStorage.acceptedInvitation);
   // console.log(this.freelancersAcceptedInvitations);
    this.appliedFreelancers=JSON.parse(sessionStorage.appliedFreelancers);
    this.mission=JSON.parse(sessionStorage.mission);
    console.log(sessionStorage.mission);
  
  }

  ngOnInit(): void {
  }

  review:any={};
  freelancer:any={};
  client:any={};
  addEmptyReview(id)
  {
    this.freelancer=
    {
      'id':id
    }
    
    this.client=
    {
      'id':sessionStorage.getItem('id')//nthabat hedha id client?
    }
    this.review=
    {
      'freelancer':this.freelancer,
      'client':this.client,
      'mission':this.mission
    }
    this.serviceReview.addFeedback(this.review).subscribe(res=>{console.log(res);});
  }
  hireFreelancer(id) {
    this.missionService.setMissionAsHired(this.mission.id,id).subscribe(data =>{
      this.addEmptyReview(id);
      console.log("review ajouté");
    } );

    /*
    this.freelancer=
    {
      'id':id
    }
    console.log(this.freelancer);
    this.client=
    {
      'id':sessionStorage.getItem('id')
    }
    this.mission=
    {
      'id':sessionStorage.mission.id
    }
    console.log(this.client);
    this.review=
    {
      'freelancer':this.freelancer,
      'client':this.client,
      'mission':this.mission
    }
    this.serviceReview.addFeedback(this.review).subscribe(res=>{});

    */



    
    //this.router.navigate(['/hired-missions-client']);
  }
}
