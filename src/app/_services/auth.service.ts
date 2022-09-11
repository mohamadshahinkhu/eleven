import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __values } from 'tslib';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<any>(this.baseUrl + '/auth/username', {
      username: username,
    });
  }
  signup(username:any){
    return this.http.post<any>(this.baseUrl + '/auth/signup' , __values);
  }
}
