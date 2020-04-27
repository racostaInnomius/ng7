import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick() {
    console.log('clicked from service');
    // return this.http.get('https://reqres.in/api/users');
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
