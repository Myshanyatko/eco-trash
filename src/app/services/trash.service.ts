import { Trash } from './../models/trash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://hakaton-y88u.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class TrashService {
  constructor(private http: HttpClient) {}

  getTrash(id: number) {
    return this.http.get<Trash>(API + '/trash/' + id);
  }
  getTrashs(filter: string) {
    return this.http.get<Trash[]>(API + '/trash', {
      params: { filter: filter },
    });
  }
}
