import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MissionService} from '../services/missions/mission.service';

@Component({
  selector: 'app-list-completed-freelancer-missions',
  templateUrl: './list-completed-freelancer-missions.component.html',
  styleUrls: ['./list-completed-freelancer-missions.component.css']
})
export class ListCompletedFreelancerMissionsComponent implements OnInit {
  completedMissions;

  constructor(public router:Router ,public missionService : MissionService) { }

  ngOnInit(): void {
    this.missionService.getCompletedMissionsForFreelancer(sessionStorage.getItem('id')).
    subscribe(data =>{
      this.completedMissions = data;
    })
  }

  giveFeedback() {

  }
}
