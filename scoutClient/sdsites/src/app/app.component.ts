import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {NavMenuComponent} from './components/nav-menu/nav-menu.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    private as: AuthService,
    private us: UserService,
  ){

  }
  title = 'ClientApp';
}
