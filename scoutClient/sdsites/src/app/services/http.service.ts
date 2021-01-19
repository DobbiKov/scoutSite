import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
import { Token } from '../models/token';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

export const ACCES_TOKEN_KEY = "acces_token";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    public user: User;
    public role: Role;

    isAuthenticated(): boolean {
        var token = localStorage.getItem(ACCES_TOKEN_KEY);
        return !!token;
    }
    getToken(): any{
        if(this.isAuthenticated()) return localStorage.getItem(ACCES_TOKEN_KEY);
        return "";
    }
    logout(): void {
        localStorage.removeItem(ACCES_TOKEN_KEY);
        this.router.navigate(['']);
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

    request(type: string, url: string, content: any = {}, headers: any = {'Accept': 'application/json', 'Content-Type': 'application/json'}): any{
        switch(type){
            case 'GET':{
                // if(this.isAuthenticated()){
                //     this.updateToken();
                // }
                var req = this.http.get(`http://scoutapi.dobbikov.ga${url}`, {headers: headers});
                return req;
            }
            case 'POST':{
                // if(this.isAuthenticated()){
                //     this.updateToken();
                // }
                var req = this.http.post(`http://scoutapi.dobbikov.ga${url}`, content, {headers: headers});
                return req;
            }
            case 'PUT':{
                // if(this.isAuthenticated()){
                //     this.updateToken();
                // }
                var req = this.http.put(`http://scoutapi.dobbikov.ga${url}`, content, {headers: headers});
                return req;
            }
            case 'DELETE':{
                // if(this.isAuthenticated()){
                //     this.updateToken();
                // }
                var req = this.http.delete(`http://scoutapi.dobbikov.ga${url}`, {headers: headers});
                return req;
            }
        }
    }
}
