import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  urlStudy='http://127.0.0.1:8070/Studies';
  urlEducation='http://127.0.0.1:8070/Education';
  constructor(private Http: HttpClient) { }

  createStudy(study) // add a certain experience to a certain freelancer
  {
   
    return this.Http.post(this.urlStudy+'/addStudy',study);
 }
 createNewEducation(education)
 {
  return this.Http.post(this.urlEducation+'/addEducation',education);
 }

 getEducation(school,degree)//return a list of education with a certain school name and degree
 {
  return this.Http.get(this.urlEducation +'/getEducationBySchoolAndDegree/'+school+'/'+degree);
 }
 
 getListOfEducation(idFreelancer) // return the list of eductional experiences of a certain freelancer
 {
  return this.Http.get(this.urlStudy +'/listByIdFreelancer/'+idFreelancer);
 }

}
