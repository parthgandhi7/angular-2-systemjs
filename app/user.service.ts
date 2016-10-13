import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { User } from './user';
@Component({
  providers: [Http]
}
)
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'http://localhost:3005/users';  // URL to web api
  constructor(private http: Http) { }
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json() as User[])
               .catch(this.handleError);
  }
  getUsersObs(): Observable<User[]> {
    return this.http.get(this.usersUrl)
                .map((res:any) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
  getUser(id): Promise<User> {
    return this.http.get(this.usersUrl+'/'+id)
               .toPromise()
               .then(response => response.json() as User)
               .catch(this.handleError);
  }
  createUser(user): Promise<User> {
    return this.http.post(this.usersUrl, user, this.headers)
               .toPromise()
               .then(response => response.json() as User)
               .catch(this.handleError);
  }
  updateUser(user, id): Promise<User> {
    return this.http.post(this.usersUrl+'/'+id, user, this.headers)
               .toPromise()
               .then(response => response.json() as User)
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
