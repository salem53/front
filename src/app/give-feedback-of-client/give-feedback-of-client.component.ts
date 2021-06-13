import { FeedbacksFreelancerService } from './../services/reviews/feedbacks-freelancer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-give-feedback-of-client',
  templateUrl: './give-feedback-of-client.component.html',
  styleUrls: ['./give-feedback-of-client.component.css']
})
export class GiveFeedbackOfClientComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute,private serviceReview :FeedbacksFreelancerService) { }

  ngOnInit(): void {
  }

  review:any={};

  
  giveFeedback(form)
  {
    let freelancer:any={
      'id':parseInt(this.route.snapshot.params.idFreelancer)
    }
    let client:any={
      'id':parseInt(sessionStorage.getItem('id'))
    }
    let mission:any={
        'id':parseInt(this.route.snapshot.params.idMission)
    }
      this.review=
      {
        'freelancer':freelancer,
        'client':client,
        'mission':mission,
        'commentClient':form.value.feedback
      }
        this.serviceReview.getClientFeedback(this.review).subscribe(res=>{console.log("feed done")});
  }

}
