import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoutMinimum } from '../../../models/minimum';
import { User } from '../../../models/user';
import { UserScoutMinimum } from '../../../models/userscoutminimum';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-users-user-scout-minimum',
  templateUrl: './admin-users-user-scout-minimum.component.html',
  styleUrls: ['./admin-users-user-scout-minimum.component.scss']
})
export class AdminUsersUserScoutMinimumComponent implements OnInit {

  constructor(
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private hs: HttpService
    ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getInfoOfUser();
    this.getInfo();
    this.getUserMinimum();
    this.getMinimum();
  }
  public id: number;
  public user: User;
  public minimum: ScoutMinimum[];
  public scoutMinimum: any;

  getInfo(): void{
    
  }
  getInfoOfUser(): void{
    this.hs.request('GET', `/api/Users/${this.id}`).subscribe(
      (data: User) => {this.user = data;},
      (error: HttpErrorResponse) => {}
    );
  }

  getUserMinimum(): any{
    this.hs.request('GET', `/api/userScoutMininmums/ByUserId/${this.id}`).subscribe(
      (data: any) => {this.scoutMinimum = data},
      (error: HttpErrorResponse) => {}
    );
  }
  getMinimum(): any{
    this.hs.request('GET', '/api/ScoutMinimum').subscribe(
      (data: ScoutMinimum[]) => {this.minimum = data},
      (error: HttpErrorResponse) => {}
    );
  }

  change(i: number, values: any){
    this.scoutMinimum[i].value = values.currentTarget.checked;
    // console.log(`${$event}`);
  }
  update(){
    this.hs.request('PUT', `/api/userScoutMinimums/${this.id}`, this.scoutMinimum).subscribe(
      (data: UserScoutMinimum) => {alert('Вы успешно сохраниили данные о скаутском минимуме данного пользователя.')},
      (error: HttpErrorResponse) => {alert('Не удалось сохранить данные о скаутском минимуме. ' + error.message)}
    );
  }

  ngOnInit() {
  }

}
