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
   return this.http.get('https://api.github.com/users/' + this.username + '?access_token=c3b1f5c6f1f249e5dadd317dd3c2988eb380e3d7');

  }
  findRepo() {
// tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?access_token=c3b1f5c6f1f249e5dadd317dd3c2988eb380e3d7');

  }
  userName(username: string) {
    this.username = username;
  }


}
