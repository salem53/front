import { MissionService } from './../services/missions/mission.service';
import { FlaskServiceService } from './../services/flask/flask-service.service';
import { FreelancerService } from './../services/freelancer/freelancer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invite-freelancer',
  templateUrl: './invite-freelancer.component.html',
  styleUrls: ['./invite-freelancer.component.css']
})
export class InviteFreelancerComponent implements OnInit {
  listRecommendedFreelancers:any[];
  listeFreelancers:any[]=[];
  constructor(private serviceFreelancer: FreelancerService,private serviceFlask: FlaskServiceService,private router : Router, private route: ActivatedRoute,private serviceMission : MissionService) { 
    let list:any=[];
    this.idMission=parseInt(this.route.snapshot.params.idMission);
    this.serviceFlask.getRecommendedFreelancer(this.idMission).subscribe(result=>{
        result['liste'].forEach(element => {       
         this.serviceFreelancer.getFreelancer(parseInt(element)).subscribe(r=>{ list.push(r); this.listeFreelancers=list;  console.log(list);});
        // this.listeFreelancers.concat();     
         console.log(element);
          });
        
    });
 


  }
 
idMission:number;
  ngOnInit(): void {
  }

 addInvitedFreelancer(idMission,idFreelancer)
 {
  // this.serviceMission.addInvitedFreelancer(idMission,idFreelancer);
  this.serviceFlask.updateInvitedList(idMission,idFreelancer).subscribe(res=>{console.log("heyoinvited")});
   console.log(this.idMission);
 }
 addAppliedFreelancer(idMission,idFreelancer)
 {
   //this.serviceFlask.updateAppliedList(idMission,idFreelancer);
   this.serviceFlask.updateAppliedList(idMission,idFreelancer).subscribe(res=>{console.log("heyoapplied")});
  // console.log("hello "+idFreelancer);
 }

 heyo(idMission,idFreelancer)
 {
 
  // console.log("heyo")
 }
}
