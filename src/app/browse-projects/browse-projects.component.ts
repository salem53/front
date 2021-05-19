import { FlaskServiceService } from './../services/flask/flask-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-projects',
  templateUrl: './browse-projects.component.html',
  styleUrls: ['./browse-projects.component.css']
})
export class BrowseProjectsComponent implements OnInit {

  listRecommendedOffers:any[];

  constructor(private flaskService : FlaskServiceService) { 
    this.getOffers();
  }

  ngOnInit(): void {
    if (!localStorage.getItem('firstReload') || localStorage.getItem('firstReload') === 'true') {
      localStorage.setItem('firstReload', 'false');
      window.location.reload();
    } else {
      localStorage.setItem('firstReload', 'true');
    }


  }

  getOffers()
  {
    this.flaskService.getRecommendedOffers(1).subscribe(resultat=>{
      this.listRecommendedOffers=resultat['liste'];
      console.log(localStorage.getItem("id")); //resultat['liste'][0]
    });
  }

}
