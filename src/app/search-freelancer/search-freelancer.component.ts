import { Component, OnInit } from '@angular/core';
import {MissionService} from '../services/missions/mission.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-freelancer',
  templateUrl: './search-freelancer.component.html',
  styleUrls: ['./search-freelancer.component.css']
})
export class SearchFreelancerComponent implements OnInit {
  id ;

  skills;

  constructor(public router : Router) {


  }

  ngOnInit(): void {

  }

  getFreelancers() {
    this.router.navigate(['founded-freelancer/' + this.skills])
  }
}
