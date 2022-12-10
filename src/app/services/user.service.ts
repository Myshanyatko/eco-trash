import { Story } from './../models/story';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://hakaton-y88u.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(id: number) {
    return this.http.get<User>(API + '/users/' + id);
  }
  getUsers(filter: string) {
    return this.http.get<User[]>(API + '/users', {
      params: { filter: filter },
    });
  }
  getStory(id: number) {
    return this.http.get<Story[]>(API + '/users/story/' + id);
  }
  useBonuses(id: number, bonuses: number) {
    return this.http.get(API + '/bonuses/use/' + id, {params: {bonuses: bonuses}});
  }
}
