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
// tslint:disable-next-line: max-line-length
    const obs = this.http.get('https://api.github.com/users/' + this.username + '?9adb3041de4c3c9162a512ff1303f347e033f264=' + 'http://api.github.com');
    obs.subscribe((response) => {
      this.response = response;
      console.log(response);
    });

      }

      ngOnInit() {

      }
    }

