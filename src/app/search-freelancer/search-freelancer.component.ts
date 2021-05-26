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
<<<<<<< HEAD
    this.id = sessionStorage.getItem('id');

=======
 this.id=sessionStorage.getItem('id');
>>>>>>> Nermine

  }

  ngOnInit(): void {

  }

  getFreelancers() {
    this.router.navigate(['founded-freelancer/' + this.skills])
  }
}
