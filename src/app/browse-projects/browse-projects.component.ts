import { FreelancerService } from './../services/freelancer/freelancer.service';
import { FlaskServiceService } from './../services/flask/flask-service.service';
import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-browse-projects',
  templateUrl: './browse-projects.component.html',
  styleUrls: ['./browse-projects.component.css']
})
export class BrowseProjectsComponent implements OnInit {
  currentMissions;
  constructor(public missionService: MissionService,private flaskService : FlaskServiceService,private fre:MissionService,private router : Router, private route: ActivatedRoute,private serviceFlask: FlaskServiceService) 
  {
    //this.fre.getMissionById(1).subscribe(res=>{console.log(res)});
    this.getOffers();
  }

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
       // console.log(this.currentMissions);
      })


  }

  listOffers:any[]=[];
  idFreelancer:number=0;
  getOffers()
  {
    let list:any=[];
    this.idFreelancer=parseInt(sessionStorage.getItem('id')) ;  //parseInt(this.route.snapshot.params.idFreelancer);
    this.serviceFlask.getRecommendedOffers(this.idFreelancer).subscribe(result=>{
        this.listOffers=result['MissionInfo'];
        console.log(result['MissionInfo']);
        console.log(this.idFreelancer);
       /* .forEach(element => {       
         this.serviceFreelancer.getFreelancer(parseInt(element)).subscribe(r=>{ list.push(r); this.listOffers=list;  console.log(list);});
        // this.listeFreelancers.concat();     
         console.log(element);
          });*/
        
    });
 
  }

}
