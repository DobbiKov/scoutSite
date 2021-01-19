import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoutEvent } from '../../../models/events';
import { EventsType } from '../../../models/eventsType';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-admin-edit-event',
  templateUrl: './admin-edit-event.component.html',
  styleUrls: ['./admin-edit-event.component.scss']
})
export class AdminEditEventComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute,
    private hs: HttpService,
    private router: Router
  ) { 
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getInfo();
  }

  public id: number;
  public ev: ScoutEvent;

  getInfo(): void{
    this.hs.request('GET', `/api/Events/${this.id}`).subscribe(
      (data: ScoutEvent) => {this.ev = data;},
      (error: HttpErrorResponse) => {}
    );
  }

  update(name: string, text: string, type: string, date: string): void{
    this.hs.request('PUT', `/api/Events/Update/${this.id}`, {Id: this.id, Name: name, Text: text, Type: type, Date: date}).subscribe(
      (data: ScoutEvent) => {
        this.router.navigate(['/admins/events']);
      },
      (error: HttpErrorResponse) => {}
    );
  }

  ngOnInit() {
  }

}
