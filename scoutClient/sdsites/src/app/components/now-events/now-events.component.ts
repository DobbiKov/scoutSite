import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScoutEvent } from '../../models/events';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-now-events',
  templateUrl: './now-events.component.html',
  styleUrls: ['./now-events.component.scss']
})
export class NowEventsComponent implements OnInit {

  constructor(
    private hs: HttpService,
  ) { 
    this.getInfo();
   }

  public events: ScoutEvent[];

  getInfo(): void{
    this.hs.request('GET', '/api/NowEvents').subscribe(
      (data: ScoutEvent[]) => {this.events = data},
      (error: HttpErrorResponse) => {}
    )
  }
  ngOnInit() {
  }

}
