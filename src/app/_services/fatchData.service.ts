import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FatchDataService {

baseUrl = 'http://localhost:5000/api/Users/';

constructor(private http: HttpClient) { }

fetchData() {
  return this.http.get<User[]>(this.baseUrl);
}

getToken(): string {
  return localStorage.getItem('token');
}

}
