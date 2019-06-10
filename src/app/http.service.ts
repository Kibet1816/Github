import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repo } from './repo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private username = '';
  private client_id = 'Iv1.9359ea5bbaf39797';
  private client_secret = '61e5494c9cbbecd81744296c09e7418ab5c23f42';


  constructor(private http: HttpClient) { }

  findProfile() {
// tslint:disable-next-line: max-line-length
   return this.http.get('https://api.github.com/users/' + this.username + '?access_token=708a29b568d64a87cf3fd47a1a8c169f5ac10810');

  }
  findRepo() {
// tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=708a29b568d64a87cf3fd47a1a8c169f5ac10810');

  }
  userName(username: string) {
    this.username = username;
  }


}
