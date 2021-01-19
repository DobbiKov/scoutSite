import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-my-acc',
  templateUrl: './edit-my-acc.component.html',
  styleUrls: ['./edit-my-acc.component.scss']
})
export class EditMyAccComponent implements OnInit {

  constructor(
    private as: AuthService,
    private us: UserService,
    private hs: HttpService
  ) {
   }

  public firstNameStatus: string = "Введите имя:";
  public lastNameStatus: string = "Введите фамилию:";
  public forestNameStatus: string = "Введите лесное имя:";
  public homeAdressStatus: string = "Введите ваш адресс:";
  public schoolStatus: string = "Введите место работы/учебы:";
  public classStatus: string = "Введите класс/курс(если учитесь):";
  public phoneNumberStatus: string = "Введите номер телефона:";
  public passportStatus: string = "Номер пасспорта/св. о рождении:";
  public telegramIdStatus: string = "Введите ваш Telegram ID:";

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  update(type: number, value: any): void{
    var user: User = this.us.user;
    switch(type){
      case 0:{
        user.firstName = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.firstNameStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.firstNameStatus = "Не удалось сохранить.";
          }
        );
        break;
      }
      case 1:{
        user.lastName = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.lastNameStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.lastNameStatus = "Не удалось сохранить.";
          }
        );
        break;
      }
      case 2:{
        user.forestName = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.forestNameStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.forestNameStatus = "Не удалось сохранить.";
          }
        );
        break;
      }
      case 3:{
        user.homeAdress = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.homeAdressStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.homeAdressStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
      case 4:{
        user.school = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.schoolStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.schoolStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
      case 5:{
        user.class = Number(value);
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.classStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.classStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
      case 6:{
        user.phoneNumber = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.phoneNumberStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.phoneNumberStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
      case 7:{
        user.passport = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.passportStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.passportStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
      case 8:{
        user.telegramId = value;
        this.us.updateUser(user).subscribe(
          (data: User) => {
            this.telegramIdStatus = "Успешно сохранено";
            this.us._user = data;
          },
          (error: HttpErrorResponse) => {
            this.telegramIdStatus = "Не удалось сохранить.";
            console.log(error.message);
          }
        );
        break;
      }
    }
  }

  ngOnInit() {
  }

}
