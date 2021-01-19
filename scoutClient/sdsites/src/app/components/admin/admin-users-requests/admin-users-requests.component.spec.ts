import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersRequestsComponent } from './admin-users-requests.component';

describe('AdminUsersRequestsComponent', () => {
  let component: AdminUsersRequestsComponent;
  let fixture: ComponentFixture<AdminUsersRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
