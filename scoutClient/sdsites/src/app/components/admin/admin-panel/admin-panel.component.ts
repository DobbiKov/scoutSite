import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  constructor( 
    private us: UserService,
    private as: AuthService
  ) { }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  public get isAdmin(): boolean {
    return this.us.role.isAdmin;
  }

  ngOnInit(): void {
  }

}
