import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private us: UserService,
    private as: AuthService) { }
  public errorText: string = "";
  login(email: string, password: string): void {
    this.as.login(email, password).subscribe(res => {
      this.us.getUser();
    },
    error => {
      this.errorText = "Неверный логин, или пароль";
    })
  }

  ngOnInit(): void {
  }

}
