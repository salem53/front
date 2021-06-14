import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  urlSkills = 'http://127.0.0.1:8070/Skills';
  urlSkilled='http://127.0.0.1:8070/Skilled';

  
  constructor(private Http: HttpClient) {

   }

       
   createSkilled(skilled) // add a certain skill to a certain freelancer
   {
    
     return this.Http.post(this.urlSkilled+'/addSkilled',skilled)
   }
 
   createNewSkill(skill)//add a new skillnot been already enregistred
   {
    
     return this.Http.post(this.urlSkills+'/addSkill',skill);
   }

   getSkillByName(name)//return the list of  experiences with this position and company name
   {
     return this.Http.get(this.urlSkills +'/getSkillByName/'+name);
   }
   getAllSkill(idFreelancer)//return the list of  experiences with this position and company name
   {
     return this.Http.get(this.urlSkilled +'/getAllSkills/'+idFreelancer);
   }

    //Gets called when the user clicks on retieve image button to get the image from back end
getFileBack(idSkill,retrieveResonse, base64Data,retrievedImage,imageName)
{
  //Make a call to Sprinf Boot to get the Image Bytes.
  this.Http.get(this.urlSkills+'/getFile/'+idSkill+'/'+imageName)
  .subscribe(
    res => {
      retrieveResonse = res;
      base64Data = retrieveResonse.picByte;
      retrievedImage = 'data:image/jpeg;base64,' + base64Data;
    }
  );
}

getQuestions() 
  {
    //console.log("hi");
    return this.Http.get(this.urlSkilled+'/getQuestions');
  }

  setValid(idFreelancer,idSkill) 
  {
    //console.log("hi");
    return this.Http.put(this.urlSkilled+'/skillValid/'+idFreelancer+'/'+idSkill,"hello");
  }

}
