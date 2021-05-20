import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-mission',
  templateUrl: './search-mission.component.html',
  styleUrls: ['./search-mission.component.css']
})
export class SearchMissionComponent implements OnInit {
  skills: any;

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  getFreelancers() {
    console.log(this.skills)
    this.router.navigate(['founded-mission/' + this.skills]);


  }
}
