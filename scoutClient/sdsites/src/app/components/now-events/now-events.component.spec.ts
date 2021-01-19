import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowEventsComponent } from './now-events.component';

describe('NowEventsComponent', () => {
  let component: NowEventsComponent;
  let fixture: ComponentFixture<NowEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
