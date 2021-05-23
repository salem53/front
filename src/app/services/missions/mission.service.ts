import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  urlMissions='http://127.0.0.1:8070/Mission';
  constructor(private Http: HttpClient) { }
  createMission(mission) // add a mission related to a client
  {

    return this.Http.post(this. urlMissions+'/addMission',mission);
  }
  getMissionById(id)
  {
    return this.Http.get(this.urlMissions +'/getMission/'+id);
  }
  getHiredMissions(){
    return this.Http.get(this.urlMissions +'/getHiredMissions');
  }
  getFreelancersBySkills(skills){
    return this.Http.get(this.urlMissions+'/getMissionsBySkills/missions/freelancers/geta/'+skills);
  }
  getMissionsBySKills(skills){
    return this.Http.get(this.urlMissions+'/getNotHiredMissionsBySkills/missions/notHired/'+skills);
  }
  getHiredMissionsForClient(clientId){
    return this.Http.get(this.urlMissions +'/getHiredMissions/clients/'+clientId);
  }

  getCompletedMissionsForClient(clientId){
    return this.Http.get(this.urlMissions +'/getCompletedMissions/clients/'+clientId);
  }
  getHiredMissionsForFreelancer(freelancerId){
    return this.Http.get(this.urlMissions +'/getHiredMissions/freelancers/'+freelancerId);
  }
  getCompletedMissionsForFreelancer(freelancerId){
    return this.Http.get(this.urlMissions +'/getCompletedMissions/freelancers/'+freelancerId);
  }
  setMissionAsCompleted(missionId){
    return this.Http.get(this.urlMissions +'/setMissionAsCompleted/mission/'+missionId);
  }
  deleteMission(id) {
    return this.Http.delete(this.urlMissions +'/deleteMission/'+id);
  }
  updateMission(mission) {
    return this.Http.put(this.urlMissions  + '/updateMission',mission);
  }
  
  addInvitedFreelancer(idMission,idFreelancer) {
    return this.Http.put(this.urlMissions  + '/updateListInvitedMission/'+idMission+'/'+idFreelancer,{ observe: 'response' });
  }
  addAppliedFreelancer(idMission,idFreelancer) {
    return this.Http.put(this.urlMissions  + '/updateListAppliedMission/'+idMission+'/'+idFreelancer,{});
  }
  updateFileMission(idMission, uploadImageData,message) {
   // return this.Http.put(this.urlMissions  + '/updateMission',mission);
     //Make a call to the Spring Boot Application to save the image
     this.Http.put(this.urlMissions+'/updateFileMission/'+idMission, uploadImageData, { observe: 'response' })
     .subscribe((response) => {
       if (response.status === 200) {
        message = 'Image uploaded successfully';
       } else {
         message = 'Image not uploaded successfully';
       }
     }
     );
  }

  /*
  getFile(idMission,FileName)
  {
    this.Http.get('this.urlMissions+'+'/getFile/'+idMission +FileName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  */

    getListInvitationToFreelancer(idFreelancer)
    {
      
      return this.Http.get(this.urlMissions +'/getInvitationListToFreelancer/'+idFreelancer);
    }

    acceptInvitationFreelancer(idMission,idFreelancer) {
      return this.Http.put(this.urlMissions  + '/updateListAcceptedInvitations/'+idMission+'/'+idFreelancer,{ observe: 'response' });
    }

    getListAppliedForMissionToFreelancer(idFreelancer)//the list of missions that this freelancer has applied for
    {
      
      return this.Http.get(this.urlMissions +'/getAppliedMissionsToFreelancer/'+idFreelancer);
    }
}

