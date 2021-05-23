import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionService } from '../services/missions/mission.service';

@Component({
  selector: 'app-list-applied-missions-freelancer',
  templateUrl: './list-applied-missions-freelancer.component.html',
  styleUrls: ['./list-applied-missions-freelancer.component.css']
})
export class ListAppliedMissionsFreelancerComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute,private service: MissionService)
  { 
    this.idFreelancer=parseInt(sessionStorage.getItem('id'));
    this.service.getListAppliedForMissionToFreelancer(this.idFreelancer).subscribe(res=>{this.listAppliedMissions=res});
    console.log(this.idFreelancer);
  }

  idFreelancer:number;
  listAppliedMissions:any;
  ngOnInit(): void {
  }

}
