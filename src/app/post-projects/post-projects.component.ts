import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-projects',
  templateUrl: './post-projects.component.html',
  styleUrls: ['./post-projects.component.css']
})
export class PostProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!localStorage.getItem('firstReload') || localStorage.getItem('firstReload') === 'true') {
      localStorage.setItem('firstReload', 'false');
      window.location.reload();
    } else {
      localStorage.setItem('firstReload', 'true');
    }
  }

}
