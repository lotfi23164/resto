import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL = 'http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  signup(user:any) {
    return this.httpClient.post(`${this.userURL}/signup`, user);
  }

  login(user:any) {
    return this.httpClient.post<{message:string, user:any}>(`${this.userURL}/login`, user);
  }

  getAllUsersService() {
    return this.httpClient.get<{users:any}>(`${this.userURL}/users`);
  }
  
}
