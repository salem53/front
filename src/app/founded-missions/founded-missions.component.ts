import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MissionService} from '../services/missions/mission.service';

@Component({
  selector: 'app-founded-missions',
  templateUrl: './founded-missions.component.html',
  styleUrls: ['./founded-missions.component.css']
})
export class FoundedMissionsComponent implements OnInit {
  freelancers;
  skills;
  constructor(public route: ActivatedRoute, public missionService : MissionService) {
    this.route.paramMap.subscribe(
      params => {
        this.skills = params.get('skills');
      }
    );
  }

  ngOnInit(): void {
    this.missionService.getMissionsBySKills(this.skills)
      .subscribe(value =>{
        this.freelancers=value;
        console.log(this.freelancers);
      } );

  }

}
