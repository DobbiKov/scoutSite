import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserRequest } from '../../../models/usersRequests';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-users-requests',
  templateUrl: './admin-users-requests.component.html',
  styleUrls: ['./admin-users-requests.component.scss']
})
export class AdminUsersRequestsComponent implements OnInit {

  public users: UserRequest[] = [];

  constructor(
    private us: UserService,
    private route: Router,
    private hs: HttpService,
    private as: AuthService
  ) {
    this.getInfo();
  }

  public accept(id: number):void {
    this.hs.request('GET', `/api/Users/AcceptRegister/${id}`, {}, {'Content-Type': 'application/json', 'Accept': 'application/json'})
    .subscribe(
      (data:User) => {
        this.getInfo();
      },
      (error:HttpErrorResponse) => {}
    );;
    this.getInfo();
    this.route.navigate(['admins/requests']);
  }
  public reject(id: number): void{
    this.hs.request('GET', `/api/Users/Reject/${id}`)
    .subscribe(
      (data:UserRequest) => {
        this.getInfo();
      },
      (error:HttpErrorResponse) => {}
    );
    this.getInfo();
    this.route.navigate(['admins/requests']);
  }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  public get canAcceptUsers(): boolean {
    return this.us.role.canAcceptUsers;
  }

  getInfo(): void{
    this.hs.request('GET', '/api/Users/UsersRequests')
    .subscribe(
      (data: UserRequest[]) => {
        this.users = data;
      },
      (error:HttpErrorResponse) => {}
    );
  }

  ngOnInit(): void {
  }

}
