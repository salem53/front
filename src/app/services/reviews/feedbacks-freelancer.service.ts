import { FlaskServiceService } from './../flask/flask-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksFreelancerService {

  urlReviews='http://127.0.0.1:8070/Reviews/'
  constructor(private Http: HttpClient,private serviceFlask:FlaskServiceService) {

    
   }
   getFeedback(idFreelancer)//get the list of empty feedbacks (feedbacks that need to be insert)
   {
      return this.Http.get(this.urlReviews+'getEmptyReviewsofFreelancer/'+idFreelancer);
   }
   /*addFreelancerFeedback(idFreelancer,idClient,review)
   {
      return this.Http.put(this.urlReviews+'addFreelancerReview/'+idFreelancer+'/'+idClient,review);
   }*/
   addFreelancerFeedback(idMission,review)
   {
      this.Http.put(this.urlReviews+'addFreelancerReview/'+idMission,review).subscribe(res=>{});
      this.serviceFlask.updateClientRating(review.client.id).subscribe(res=>{console.log(review.client.id)});
       
   }
   addClientFeedback(idMission,review)
   {
       this.Http.put(this.urlReviews+'addClientReview/'+idMission,review).subscribe(res=>{});
       this.serviceFlask.updateFreelancerRating(review.freelancer.id).subscribe(res=>{console.log(review.freelancer.id)});
   }

   addFeedback(reviews)
   {
      return this.Http.post(this.urlReviews+'add',reviews);
   }
   getFreelancerFeedback(idFreelancer)
   {
      
      return this.Http.get(this.urlReviews+'getReviewsAboutFreelancer/'+idFreelancer);
   }
   getClientFeedback(idClient)
   {
      return this.Http.get(this.urlReviews+'getReviewsAboutClient/'+idClient);
   }
}
