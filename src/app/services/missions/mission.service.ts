import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  urlMissions='http://127.0.0.1:8070/Mission'
  constructor(private Http: HttpClient) { }
  createMission(mission) // add a mission related to a client
  {
   
    return this.Http.post(this. urlMissions+'/addMission',mission);
  }
  getMissionById(id)
  {
    return this.Http.get(this.urlMissions +'/getMission/'+id);
  }
  deleteMission(id) {
    return this.Http.delete(this.urlMissions +'/deleteMission/'+id);
  }
  updateMission(mission) {
    return this.Http.put(this.urlMissions  + '/updateMission',mission);
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

}

