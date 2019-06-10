import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: any;
  response: any;
  projects: any;
  constructor(private svc: HttpService, private http: HttpClient) {}

  showProfile() {
    this.svc.userName(this.username);
    this.svc.findProfile().subscribe(
      response => {
        this.response = response;
      }
      );
      this.svc.findRepo().subscribe(
        projects => {
          this.projects = projects;
          console.log(projects);
        }
      );

    }

    ngOnInit() {

    }
  }


