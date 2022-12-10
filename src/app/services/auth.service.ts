import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = 'https://hakaton-y88u.onrender.com';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.get<number>(API+'/authorization', {
      params: { email: email, password: password },
    });
  }
}
