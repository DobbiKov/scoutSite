import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-your-acc',
  templateUrl: './your-acc.component.html',
  styleUrls: ['./your-acc.component.scss']
})
export class YourAccComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated()
  }
  public logout(): void{
    this.as.logout();
  }
  public user: User;
  constructor(
    private us: UserService,
    private http: HttpClient,
    private as: AuthService
  ) {
    this.http.get('http://scoutapi.dobbikov.ga/api/Users/ByToken',
    {headers: {"Accept":"application/json", "Authorization" : `Bearer ${this.as.getToken()}`}})
    .subscribe(
    (data:User) => {this.user = data; },
    (error:HttpErrorResponse) => {
      console.log(`Lol: ${error.status}`);
      if(error.status == 401){
        this.as.updateToken();
      }
    });
  }

  ngOnInit(): void {
  }

}
