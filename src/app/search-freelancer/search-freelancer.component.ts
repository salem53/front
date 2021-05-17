import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-freelancer',
  templateUrl: './search-freelancer.component.html',
  styleUrls: ['./search-freelancer.component.css']
})
export class SearchFreelancerComponent implements OnInit {
  id ;
  constructor() {
    this.id = sessionStorage.getItem('id');
  }

  ngOnInit(): void {
  }

}
