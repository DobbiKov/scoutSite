import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Role } from '../models/role';
import { Token } from '../models/token';
import { User } from '../models/user';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

export const ACCES_TOKEN_KEY = "acces_token";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.getUser();
    }
    public _user: User;
    public _role: Role;

    public get  user(): User {
        return this._user;
    }
    public get role(): Role {
        return this._role;
    }

    isAuthenticated(): boolean {
        var token = localStorage.getItem(ACCES_TOKEN_KEY);
        return !!token;
      }
    getToken(): any{
        if(this.isAuthenticated()) return localStorage.getItem(ACCES_TOKEN_KEY);
        return "";
    }

    getUser(): User{
        if(this.isAuthenticated() == false) return;
        this.http.get('http://scoutapi.dobbikov.ga/api/Users/ByToken', {headers:
            {"Accept": "application/json",
            "Authorization": `Bearer ${this.getToken()}`}
        }).subscribe(
            (data:User) => {
              this._user = data;
              this.getRole();
              return this._user;
            },
            (error:HttpErrorResponse) => {
                if(error.status == 401){
                    if(this.isAuthenticated()){
                        this.updateToken();
                    }
                }
            }
        );
        return this._user;
    }
    getRole(): Role{
        var roleId: number = this._user.siteRoleId;
        this.http.get(`http://scoutapi.dobbikov.ga/api/Roles/${roleId}`, {headers: {"Accept": "application/json"}}).subscribe(
            (data:Role) => {
                this._role = data;
                return this._role;
            },
            (error:HttpErrorResponse) => {}
        );
        return this._role;
    }
    updateUser(user: User): any{
        var _user = {
            Id: user.id,
            UserName: user.userName,
            ForestName: user.forestName,
            FirstName: user.firstName,
            LastName: user.lastName,
            SiteRoleId: user.siteRoleId,
            HomeAdress: user.homeAdress,
            School: user.school,
            Class: user.class,
            PhoneNumber: user.phoneNumber,
            Passport: user.passport,
            Password: user.password,
            JWTToken: this.getToken(),
            LastSignIn: user.lastSignIn,
            LastEvent: user.lastEvent,
            TelegramId: user.telegramId
        };
        var req = this.http.put(`http://scoutapi.dobbikov.ga/api/Users/Update/${user.id}`, _user, {headers: {'Accept' : 'application/json'}});
        return req;
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
            this.getUser();
          },
          (error: HttpErrorResponse) => {
              if(error.status == 404){
                this.logout();
              }
          }
        );
      }
}


