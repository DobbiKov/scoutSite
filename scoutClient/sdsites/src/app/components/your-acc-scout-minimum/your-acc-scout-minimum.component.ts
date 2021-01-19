import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScoutMinimum } from '../../models/minimum';
import { UserScoutMinimum } from '../../models/userscoutminimum';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-your-acc-scout-minimum',
  templateUrl: './your-acc-scout-minimum.component.html',
  styleUrls: ['./your-acc-scout-minimum.component.scss']
})
export class YourAccScoutMinimumComponent implements OnInit {

  constructor(
    private us: UserService,
    private as: AuthService,
    private hs: HttpService
  ) {
    this.getMinimum();
    this.getUserMinimum();
   }

  public get isLoggedIn(): boolean {
    return this.as.isAuthenticated();
  }

  public minimum: ScoutMinimum[] = [];
  public scoutMinimum: any; 

  getUserMinimum(): any{
    this.hs.request('GET', `/api/userScoutMininmums/ByUserId/${this.us.user.id}`).subscribe(
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

  ngOnInit() {
  }

}
