import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public isReg: boolean = false;
  public errorText: string;

  public emailText: string = "Введите E-Mail:";
  public firstnameText: string = "Введите имя:";
  public lastnameText: string = "Введите фамилию:";
  public forestnameText: string = "Введите лесное имя:";
  public passText: string = "Введите пароль:";
  public repeatpassText: string = "Введите повторно:";

  register(email: string, password: string, firstName: string, lastName: string, forestName: string, repeatPassword: string): any{
    if(email.length < 10){
      this.emailText = "Длина email'a должна быть не менее десяти символов.";
      return;
    }
    if(password.length < 8){
      this.passText = "Длина пароля должна быть не менее восьми символов.";
      return;
    }
    if(password != repeatPassword){
      this.repeatpassText = "Пароли не совпадают";
      return;
    }
    if(firstName.length < 1){
      this.firstnameText = "Вы не ввели имя.";
      return;
    }
    if(lastName.length < 1){
      this.lastnameText = "Вы не ввели фамилию.";
      return;
    }
    if(forestName.length < 1){
      this.forestnameText = "Вы не ввели лесное имя.";
      return;
    }
    var request = this.http.post('http://scoutapi.dobbikov.ga/api/Users/Register', {UserName: email, Password: password, FirstName: firstName, LastName: lastName, ForestName: forestName}, {headers: {'Content-Type': 'application/json'}});
    request.subscribe(
      (data:User) => {
        this.isReg = true;
      },
      (error:HttpErrorResponse) => {
        this.errorText = "Вы уже подали заявку, либо аккаунт с таким логином уже имеетя.";
        alert('Вы уже подали заявку, либо аккаунт с таким логином уже имеетя.');
      }
    );
    return request;
  }

  ngOnInit(): void {
  }

}
