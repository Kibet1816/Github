import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {

  @Output()displayProfile = new EventEmitter() ;


  username: string;
  response: any;
  constructor(private http: HttpClient ) { }

  ngOnInit() {
  }


}
