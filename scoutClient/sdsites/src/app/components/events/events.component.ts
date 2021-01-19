import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScoutEvent } from '../../models/events';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private hs: HttpService,
  ) { 
    this.getInfo();
   }

  public events: ScoutEvent[];

  getInfo(): void{
    this.hs.request('GET', '/api/Events').subscribe(
      (data: ScoutEvent[]) => {this.events = data; this.events.reverse();},
      (error: HttpErrorResponse) => {}
    )
  }
  ngOnInit() {
  }

}
