import { FeedbacksFreelancerService } from './../services/reviews/feedbacks-freelancer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-feedbacks-freelancer',
  templateUrl: './list-feedbacks-freelancer.component.html',
  styleUrls: ['./list-feedbacks-freelancer.component.css']
})
export class ListFeedbacksFreelancerComponent implements OnInit {

  constructor(private serviceReviews:FeedbacksFreelancerService,private router : Router, private route: ActivatedRoute) {
    this.idFreelancer=parseInt(this.route.snapshot.params.idFreelancer)
    this.getEmptyFeedbacks(this.idFreelancer);
   }

  ngOnInit(): void {
  }

  listEmptyFeedbacks:any=[];
idFreelancer:number;
  getEmptyFeedbacks(idFreelancer)
  {
      this.serviceReviews.getFeedback(idFreelancer).subscribe(result=>{
          this.listEmptyFeedbacks=result;
          console.log(result);
      })
  }
  redirect(idClient)
  {
    this.router.navigate(['feedbackFreelancer/'+idClient]);
  }

}
