import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoutEvent } from '../../../models/events';
import { User } from '../../../models/user';
import { HttpService } from '../../../services/http.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-users-user',
  templateUrl: './admin-users-user.component.html',
  styleUrls: ['./admin-users-user.component.scss']
})
export class AdminUsersUserComponent implements OnInit {

  constructor(
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private hs: HttpService,
    private us: UserService
    ) {
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getInfo();
    this.getEvents();
  }
  public id: number;
  public user: User;
  public lastEventStatus: string = "";
  public events: ScoutEvent[];

  getInfo(): void{
    this.hs.request('GET', `/api/Users/${this.id}`).subscribe(
      (data: User) => {this.user = data;},
      (error: HttpErrorResponse) => {}
    );
  }
  saveEvent(date: string): void{
    let user = this.user;
    user.lastEvent = date;
    this.us.updateUser(user).subscribe(
      (data: User) => {
        this.lastEventStatus = "Успешно сохранено";
        this.us._user = data;
        this.user = data;
      },
      (error: HttpErrorResponse) => {
        this.lastEventStatus = "Не удалось сохранить.";
        console.log(error.message);
      }
    );
  }
  redirect(id: number): void{
    this.router.navigate([`/admins/users/user/scout-minimum/${id}`]);
  }

  getEvents(): void{
    this.hs.request('GET', '/api/LastEvents').subscribe(
      (data: ScoutEvent[]) => {this.events = data; this.events.reverse();},
      (error: HttpErrorResponse) => {}
    )
  }
  ngOnInit() {
  }

}
