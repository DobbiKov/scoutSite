import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-acc-nav',
  templateUrl: './your-acc-nav.component.html',
  styleUrls: ['./your-acc-nav.component.scss']
})
export class YourAccNavComponent implements OnInit {

  constructor() { }

  @Input() activeComp: number;

  clickActive(id: number): void {
    this.activeComp = id;
  }

  ngOnInit() {
  }

}
