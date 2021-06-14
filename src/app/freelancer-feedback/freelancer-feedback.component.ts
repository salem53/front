import { FlaskServiceService } from './../services/flask/flask-service.service';

import { FeedbacksFreelancerService } from './../services/reviews/feedbacks-freelancer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-feedback',
  templateUrl: './freelancer-feedback.component.html',
  styleUrls: ['./freelancer-feedback.component.css']
})
export class FreelancerFeedbackComponent implements OnInit {

  constructor(private serviceFeed :FeedbacksFreelancerService,private router : Router, private route: ActivatedRoute,private flaskService:FlaskServiceService) {
    this.idFreelancer=parseInt(sessionStorage.getItem('id'));
    this.idClient=parseInt(this.route.snapshot.params.idClient);
    this.idMission=parseInt(this.route.snapshot.params.idMission);
   }

  ngOnInit(): void {
  }
  
  idMission:number;
  review:any={};
idClient:number;
  idFreelancer:number;
  freelancer:any={};
  client:any={};
  feedback:any={};
  mission:any={};
  newFreelancerReview(form) //add a freelancer's review
  {
    this.freelancer=
    {
      'id':this.idFreelancer,
    }
    this.review.freelancer=this.freelancer;
   
    this.client=
    {
      'id':this.idClient
    }
    this.review.client=this.client;
    this.mission=
    {
      'id':this.idMission
    }
  
    this.review.mission=this.mission;
  /*
    this.freelancer.id=this.idFreelancer;
    this.review.freelancer=this.freelancer;
    this.client.id=this.idClient;
    this.review.client=this.client;
    */
    console.log(form.value.feed);
    this.review.commentFreelancer=form.value.feed;
    this.serviceFeed.addFreelancerFeedback(this.idMission,this.review).subscribe(res=>{console.log("heyoooo1")});
    alert("Thanks for giving your feedback");
    this.router.navigate(['list-completed-freelancer-mission']);
  }



  newReview(form)//add empty review
  {
   
    this.freelancer=
    {
      'id':this.idFreelancer,
    }
    this.review.freelancer=this.freelancer;
   
    this.client=
    {
      'id':this.idClient
    }
    this.review.client=this.client;
    this.mission=
    {
      'id':this.idMission
    }
  
    this.review.mission=this.mission;
    console.log(this.freelancer);
    console.log(this.client);
    console.log(this.mission);
    this.serviceFeed.addFeedback(this.review).subscribe(res=>{console.log("doneee")});

  }
}
