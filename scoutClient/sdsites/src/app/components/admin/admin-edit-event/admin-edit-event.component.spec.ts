import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditEventComponent } from './admin-edit-event.component';

describe('AdminEditEventComponent', () => {
  let component: AdminEditEventComponent;
  let fixture: ComponentFixture<AdminEditEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
