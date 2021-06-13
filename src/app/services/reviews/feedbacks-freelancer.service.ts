import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksFreelancerService {

  urlReviews='http://127.0.0.1:8070/Reviews/'
  constructor(private Http: HttpClient) {

    
   }
   getFeedback(idFreelancer)//get the list of empty feedbacks (feedbacks that need to be insert)
   {
      return this.Http.get(this.urlReviews+'getEmptyReviewsofFreelancer/'+idFreelancer);
   }
   addFreelancerFeedback(idFreelancer,idClient,review)
   {
      return this.Http.put(this.urlReviews+'addFreelancerReview/'+idFreelancer+'/'+idClient,review);
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
