import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoutEvent } from '../../../models/events';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-create-event',
  templateUrl: './admin-create-event.component.html',
  styleUrls: ['./admin-create-event.component.scss']
})
export class AdminCreateEventComponent implements OnInit {

  constructor(
    private router: Router,
    private hs: HttpService
  ) { }

  public dateStatus = "Введите дату проведения мероприятия в формате M/D/YYYY (12/23/2020):";
  ngOnInit() {
  }
  create(name: string, text: string, type: string, date: string): void{
    if(date.indexOf("/") == -1){
      this.dateStatus = "Вы ввели неверно дату. Формат: M/D/YYYY";
      return;
    }
    let dates = date.split('/');
    if(dates.length != 3){
      this.dateStatus = "Вы ввели неверно дату. Формат: M/D/YYYY";
      return;
    }
    if(Number(dates[0]) > 12 || Number(dates[0]) < 1 || Number(dates[1]) > 31 || Number(dates[1]) < 1){
      this.dateStatus = "Вы ввели неверно дату. Формат: M/D/YYYY";
      return;
    }

    this.hs.request('POST', '/api/Events/Create', {Name: name, Text: text, Type: type, Date: date}).subscribe(
      (data: ScoutEvent) => {
        this.router.navigate(['/admins/events']);
      },
      (error: HttpErrorResponse) => {}
    );
  }

}
