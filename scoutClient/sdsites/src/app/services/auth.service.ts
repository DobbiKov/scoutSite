import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Token } from '../models/token';
import { HttpService } from './http.service';
import { UserService } from './user.service';

export const ACCES_TOKEN_KEY = "acces_token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  done: boolean = false;
  _token: string;

  login(email: string, password: string): any{
    var request = this.http.post('http://scoutapi.dobbikov.ga/api/Users/Auth', {Email: email, Password: password}, {headers: {'Content-Type': 'application/json'}});

    request.subscribe((token:Token) => {this._token = token.acces_token; this.done = true; localStorage.setItem(ACCES_TOKEN_KEY, this._token); this.router.navigate(['youracc']); });
    return request;
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(ACCES_TOKEN_KEY);
    return !!token;
  }
  logout(): void {
    localStorage.removeItem(ACCES_TOKEN_KEY);
    this.router.navigate(['']);
  }
  getToken(): any{
    if(this.isAuthenticated()) return localStorage.getItem(ACCES_TOKEN_KEY);
    return "";
  }
  updateToken(): void{
    this.http.post
    (
      'http://scoutapi.dobbikov.ga/api/Users/UpdateToken',
      {Token: this.getToken()},
      {headers: {'Content-Type': 'application/json'}})
      .subscribe((token:Token) => {
        localStorage.setItem(ACCES_TOKEN_KEY, token.acces_token);
      },
      (error: HttpErrorResponse) => {
          if(error.status == 404){
            this.logout();
          }
      }
    );
  }
}
