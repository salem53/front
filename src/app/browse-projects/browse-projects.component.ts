import { FlaskServiceService } from './../services/flask/flask-service.service';
import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';

@Component({
  selector: 'app-browse-projects',
  templateUrl: './browse-projects.component.html',
  styleUrls: ['./browse-projects.component.css']
})
export class BrowseProjectsComponent implements OnInit {
  currentMissions;
  constructor(public missionService: MissionService,private flaskService : FlaskServiceService) {this.getOffers();}

  listRecommendedOffers:any[];

 

  ngOnInit(): void {
    if (!localStorage.getItem('firstReload') || localStorage.getItem('firstReload') === 'true') {
      localStorage.setItem('firstReload', 'false');
      window.location.reload();
    } else {
      localStorage.setItem('firstReload', 'true');
    }

    this.missionService.getHiredMissionsForFreelancer(sessionStorage.getItem('id'))
      .subscribe(missions => {
        this.currentMissions =missions;
        console.log(this.currentMissions);
      })


  }

  getOffers()
  {
    this.flaskService.getRecommendedOffers(1).subscribe(resultat=>{
      this.listRecommendedOffers=resultat['liste'];
      console.log(localStorage.getItem("id")); //resultat['liste'][0]
    });
  }

}
