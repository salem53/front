import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MissionService} from '../services/missions/mission.service';

@Component({
  selector: 'app-list-completed-client-missions',
  templateUrl: './list-completed-client-missions.component.html',
  styleUrls: ['./list-completed-client-missions.component.css']
})
export class ListCompletedClientMissionsComponent implements OnInit {

  completedMissions;
  constructor(public router:Router,public missionService:MissionService) {

  }

  ngOnInit(): void {
    this.missionService.getCompletedMissionsForClient(sessionStorage.getItem('id')).
    subscribe(data =>{
      this.completedMissions = data;
    })
  }

  giveFeedback() {

  }
}
