import { Trash } from './../models/trash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoryTrash } from '../models/storyTrash';

const API = 'https://hakaton-y88u.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class TrashService {
  constructor(private http: HttpClient) {}

  getTrash(id: number) {
    return this.http.get<Trash>(API + '/trash/' + id);
  }
  getAble(id: number, able: boolean) {
    return this.http.get(API + '/trash/put/' + id, { params: { disabled: able } });
  }
  getTrashs(filter: string) {
    return this.http.get<Trash[]>(API + '/trash/search', {
      params: { filter: filter },
    });
  }
  getStoryTrash(id: number) {
    return this.http.get<StoryTrash[]>(API + '/trash/story/' + id);
  }
}
