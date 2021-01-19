import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoutEvent } from '../../../models/events';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

  constructor(
    private hs: HttpService,
    private us: UserService,
    private as: AuthService,
    private router: Router
  ) { 
    this.getInfo();
   }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }
  public get isAdmin(): boolean {
    return this.us.role.isAdmin;
  }
  public events: ScoutEvent[];

  getInfo(): void{
    this.hs.request('GET', '/api/Events').subscribe(
      (data: ScoutEvent[]) => {this.events = data; this.events.reverse();},
      (error: HttpErrorResponse) => {}
    )
  }
  seen(id: number): void{
    this.router.navigate([`/events/${id}`]);
  }
  edit(id: number): void{
    this.router.navigate([`/admins/events/edit/${id}`]);
  }
  delete(id: number): void{
    this.hs.request('DELETE', `/api/Events/Delete/${id}`).subscribe(
      (data: ScoutEvent) => {this.getInfo()},
      (error: HttpErrorResponse) => {}
    )
  }
  ngOnInit() {
  }

}
