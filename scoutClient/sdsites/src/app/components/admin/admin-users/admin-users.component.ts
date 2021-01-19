import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private as: AuthService,
    private us: UserService,
    private router: Router
  ) { 
    this.getUsers();
  }


  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  public get isAdmin(): boolean {
    return this.us.role.isAdmin;
  }

  public users: User[] = [];


  getUsers(): void{
    this.hs.request('GET', '/api/Users').subscribe(
      (data: User[]) => {this.users = data;},
      (error: HttpErrorResponse) => {}
    );
  }
  redirect(id: number): void{
    this.router.navigate([`/admins/users/user/${id}`]);
  }
  ngOnInit() {
  }

}
