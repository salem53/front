import { Component, OnInit } from '@angular/core';
import {FreelancerService} from "../services/freelancer/freelancer.service";
import {Router} from "@angular/router";
import {FlaskServiceService} from "../services/flask/flask-service.service";
import {Post} from '../services/data/post';
import {DataService} from '../services/data/data.service';

@Component({
  selector: 'app-test-flask',
  templateUrl: './test-flask.component.html',
  styleUrls: ['./test-flask.component.css']
})
export class TestFlaskComponent implements OnInit {

  post: Post[]
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
      this.post = posts
      this.dataService.postsData = posts
    });
  }

  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.post = this.dataService.filteredListOptions();
    else {
      this.post = this.dataService.postsData;
    }

    console.log(this.post);
  }

}
