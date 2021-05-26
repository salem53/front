import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-application-client',
  templateUrl: './manage-application-client.component.html',
  styleUrls: ['./manage-application-client.component.css']
})
export class ManageApplicationClientComponent implements OnInit {
  id;
  missions;
  constructor(public missionService: MissionService,public router : Router) {
    this.id=sessionStorage.getItem('id');
    this.missionService.getNotHiredMissionsForClient(this.id).subscribe(data =>{
      this.missions=data;
      console.log(this.missions);
    })
  }

  ngOnInit(): void {

  }

  getDetails(m: any) {
    sessionStorage.setItem('invitedFreelancers', JSON.stringify(m.invitedFreelancers));
    sessionStorage.setItem('mission', JSON.stringify(m.mission));

    sessionStorage.setItem('acceptedInvitation',JSON.stringify(m.freelancersAcceptedInvitations));
    sessionStorage.setItem('appliedFreelancers',JSON.stringify(m.appliedFreelancers));
    this.router.navigate(['not-hired-mission-details']);

  }
}
