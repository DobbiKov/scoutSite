import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateEventComponent } from './admin-create-event.component';

describe('AdminCreateEventComponent', () => {
  let component: AdminCreateEventComponent;
  let fixture: ComponentFixture<AdminCreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
