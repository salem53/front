import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-hired-mission-details',
  templateUrl: './not-hired-mission-details.component.html',
  styleUrls: ['./not-hired-mission-details.component.css']
})
export class NotHiredMissionDetailsComponent implements OnInit {
  invitedFreelancers;
  freelancersAcceptedInvitations;
  appliedFreelancers;
  mission;
  constructor(public missionService: MissionService, public router: Router) {
    this.invitedFreelancers =JSON.parse(sessionStorage.invitedFreelancers);
    console.log(this.invitedFreelancers);
    this.freelancersAcceptedInvitations=JSON.parse(sessionStorage.acceptedInvitation);
    console.log(this.freelancersAcceptedInvitations);
    this.appliedFreelancers=JSON.parse(sessionStorage.appliedFreelancers);
    this.mission=JSON.parse(sessionStorage.mission);
    console.log(this.appliedFreelancers)
  }

  ngOnInit(): void {
  }

  hireFreelancer(id) {
    this.missionService.setMissionAsHired(this.mission.id,id).subscribe(data =>{
      this.router.navigate(['/hired-missions-client']);
    } )


  }
}
