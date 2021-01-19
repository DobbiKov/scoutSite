import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersUserComponent } from './admin-users-user.component';

describe('AdminUsersUserComponent', () => {
  let component: AdminUsersUserComponent;
  let fixture: ComponentFixture<AdminUsersUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
