import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlaskServiceService {
  urlFlask = 'http://127.0.0.1:5000';
  constructor(private Http: HttpClient) { }
  getHelloWorld()  {
    return this.Http.get(this.urlFlask);
  }
  getRecommendedOffers(idFreelancer)
  {
      return this.Http.get<any[]>(this.urlFlask+'/recommandOffer/'+idFreelancer);
  }
  getRecommendedFreelancer(idMission)
  {
      return this.Http.get<any[]>(this.urlFlask+'/recommandfreelancer/'+idMission);
  }
  updateAppliedList(idMission,idFreelancer)
  {
      return this.Http.get<any>(this.urlFlask+'/updateAppliedList/'+idMission+'/'+idFreelancer);
  }
  updateInvitedList(idMission,idFreelancer)
  {
      return this.Http.get<any>(this.urlFlask+'/updateInvitedList/'+idMission+'/'+idFreelancer);
  }
}
