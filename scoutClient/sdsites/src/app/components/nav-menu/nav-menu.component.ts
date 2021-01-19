import { Component } from '@angular/core';
import { Role } from '../../models/role';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})

export class NavMenuComponent {

  constructor(
    private us: UserService,
    private as: AuthService
  ){
    this.activeComp = 1;
  }
  public activeComp: number;
  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  public get isAdmin(): boolean {
    return this.us.role.isAdmin;
  }
  clickActive(num: number): void{
    this.activeComp = num;
  }
}
