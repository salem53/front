import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../services/missions/mission.service';

@Component({
  selector: 'app-list-invitations-freelancer',
  templateUrl: './list-invitations-freelancer.component.html',
  styleUrls: ['./list-invitations-freelancer.component.css']
})
export class ListInvitationsFreelancerComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute,private service: MissionService) 
  {
    this.idFreelancer=parseInt(sessionStorage.getItem('id'));
    //console.log(this.idFreelancer);
    this.service.getListInvitationToFreelancer(this.idFreelancer).subscribe(res=>{this.listInvitations=res});
   }

  ngOnInit(): void {
  }

  idFreelancer:number;
  listInvitations:any;
  
  acceptInvitation(idMission)
  {
    console.log(idMission+1);
    this.service.acceptInvitationFreelancer(idMission,this.idFreelancer).subscribe(res=>{ this.router.navigate(['invitationsForMissions']);});
   
  }

}
